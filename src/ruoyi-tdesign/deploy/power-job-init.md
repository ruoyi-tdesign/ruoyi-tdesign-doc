# 搭建PowerJob任务调度中心

## 配置调度中心客户端
> 修改主服务配置文件 <br> 
> - `ruoyi-admin/src/main/resources/application-dev.yml`
> - `ruoyi-admin/src/main/resources/application-prod.yml`

```yaml:line-numbers=12
--- # powerjob 配置
powerjob:
  worker:
    # 如何开启调度中心请查看文档教程
    enabled: true
    # 需要先在 powerjob 登录页执行应用注册后才能使用
    app-name: ruoyi-worker
    allow-lazy-connect-server: false
    max-appended-wf-context-length: 4096
    max-result-length: 4096
    # 28080 端口 随着主应用端口飘逸 避免集群冲突
    port: 2${server.port}
    protocol: http
    server-address: 127.0.0.1:7700
    store-strategy: disk
```

* `enabled` 可启用或关闭客户端注册
* `server-address` 为调度中心地址
* `app-name` 为执行器组账户名(需在调度中心注册方可登录查看)

## 启用调度中心
**需执行 `script/sql/powerjob.sql` 默认账号密码 `ruoyi-worker` `123456` 账号在数据库里 可以在页面修改密码**
<br>

> 在 `扩展项目 -> powerjob-server模块` 启动
> 需修改配置文件数据库连接地址(**注意: 此处为ruoyi-powerjob-server服务的配置文件**)

![img.png](../../assets/images/ruoyi-tdesign/deploy/power_job_init/img.png)

> 也可配置邮件发送 钉钉推送 和 mongodb存储

```yaml
####### MongoDB properties(Non-core configuration properties)  #######
####### delete mongodb config to disable mongodb #######
oms.mongodb.enable=false
#spring.data.mongodb.uri=mongodb+srv://zqq:No1Bug2Please3!@cluster0.wie54.gcp.mongodb.net/powerjob_daily?retryWrites=true&w=majority

####### Email properties(Non-core configuration properties) #######
####### Delete the following code to disable the mail #######
#spring.mail.host=smtp.163.com
#spring.mail.username=zqq@163.com
#spring.mail.password=GOFZPNARMVKCGONV
#spring.mail.properties.mail.smtp.auth=true
#spring.mail.properties.mail.smtp.starttls.enable=true
#spring.mail.properties.mail.smtp.starttls.required=true

####### DingTalk properties(Non-core configuration properties) #######
####### Delete the following code to disable the DingTalk #######
#oms.alarm.ding.app-key=dingauqwkvxxnqskknfv
#oms.alarm.ding.app-secret=XWrEPdAZMPgJeFtHuL0LH73LRj-74umF2_0BFcoXMfvnX0pCQvt0rpb1JOJU_HLl
#oms.alarm.ding.agent-id=847044348
```

## 前端修改任务调度中心访问路径
`dev`环境 默认使用 `.env.development` 配置文件内地址

```properties
# powerjob 控制台地址
VITE_APP_POWERJOB_ADMIN='http://localhost:7700/'
```

`prod`环境 使用 `.env.production` 本机路由

```properties
# powerjob 控制台地址
VITE_APP_POWERJOB_ADMIN='/powerjob'
```

故而 `prod` 环境只需更改 `nginx` 反向代理路径即可
打开文件： `script/docker/nginx/conf/nginx.conf`

```nginx configuration
http {
    # 负载均衡，如不需要，可直接替换到以下地址中
    upstream powerjob-server {
        server 127.0.0.1:7700;
    }

    server {
        # https 会拦截内链所有的 http 请求 造成功能无法使用
        # 解决方案1 将 powerjob 服务 也配置成 https
        # 解决方案2 将菜单配置为外链访问 走独立页面 http 访问
        location ^~ /powerjob/ {
            proxy_set_header Host $http_host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header REMOTE-HOST $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_pass http://powerjob-server/; #使用负载均衡地址
        }

        # 解决 powerjob 代理之后静态文件无法访问的问题 请勿修改乱动
        # 此处是Ruoyi-Vue-Plus的解决方案，未测试过。若还是无法访问，建议另起一个域名。
        location ~ ^/(js|css|jpg|png|svg|woff|ttf|ico|img)/ {
            proxy_pass http://powerjob-server; #使用负载均衡地址
        }
    }
}
```
