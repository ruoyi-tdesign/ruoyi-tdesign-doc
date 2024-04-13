# Websocket

## 配置说明
::: code-group
```yaml [application.yml <Badge type="tip" text="1.3.0" />]
--- # websocket
websocket:
  # 如果关闭 需要和前端开关一起关闭
  enabled: true
  multiple:
    # login用户登录类型
    login:
      # websocket连接路径：ws://localhost:8080/resource/websocket
      paths: /resource/websocket
      # 设置访问源地址
      allowedOrigins: '*'
    # user用户登录类型
    user:
      paths: /front/biz/websocket
      # 设置自定义处理器需要继承AbstractCustomWebSocketHandler或实现ICustomWebSocketHandler
      handler: org.dromara.biz.websocket.BizWebSocketHandler
```
```yaml [application.yml  <Badge type="info" text="1.2.0" />]
--- # websocket，1.2.0版本及以下不支持多账号类型
websocket:
  # 如果关闭 需要和前端开关一起关闭
  enabled: true
  # websocket连接路径：ws://localhost:8080/resource/websocket
  path: /resource/websocket
  # 设置访问源地址
  allowedOrigins: '*'
```
:::
* enabled 是否开启此功能
* path 应用路径
* allowedOrigins 设置访问源地址
* handler 自定义处理器

::: tip
自 `1.3.0` 起版本支持多账号类型以及自定义处理器
:::

**重点: 如关闭ws功能需连同前端ws开关一同关闭 不然前端启动会报错**

开发环境在 `.env.development` 文件中关闭，正式环境在`.env` 文件中关闭
```properties
# websocket 开关
VITE_APP_WEBSOCKET=false
```

## 使用方法
前端连接方式: `ws://后端ip:端口/resource/websocket?clientid=import.meta.env.VITE_APP_CLIENT_ID&Authorization=Bearer eyJ0eXAiO......`

> 由于js不支持请求头传输故而采用参数传输 如支持请求头传输建议使用请求头传输

传输方式:

```javascript
headers: {
    Authorization: "Bearer " + getToken(),
    clientid: import.meta.env.VITE_CLIENT_ID
}
```
其中 `Authorization` 为请求token需要登录后获取 连接成功之后 与框架内其他获取登录用户方式一致

`WebSocketUtils.sendMessage` 推送单机消息(特殊需求使用)<br>
`WebSocketUtils.subscribeMessage` 订阅分布式消息(框架初始化已订阅)<br>
`WebSocketUtils.publishMessage` 发布分布式消息(推荐使用 所有集群内寻找到接收人)<br>
