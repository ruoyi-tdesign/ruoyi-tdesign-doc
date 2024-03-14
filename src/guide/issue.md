# 常见问题

::: tip
这个 FAQ 假定你已经有一些使用 Springboot 和 Vue 的开发经验。
:::

## Jdk17 TLS问题

> JDK17需要到jdk/conf/security目录文件下，删除jdk.tls.disabledAlgorithms中的TLSv1, TLSv1.1限制

删除前：
```text
jdk.tls.disabledAlgorithms=SSLv3, TLSv1, TLSv1.1, RC4, DES, MD5withRSA, \
   DH keySize < 1024, EC keySize < 224, 3DES_EDE_CBC, anon, NULL
```
删除后:
```text
jdk.tls.disabledAlgorithms=SSLv3, RC4, DES, MD5withRSA, \
  DH keySize < 1024, EC keySize < 224, 3DES_EDE_CBC, anon, NULL
```

## 未能读取到有效Token

1. 由于使用了单项目多用户配置的原因，需要在 `application.yml` 文件中加入自定义的url用来对应不同用户对应需要检验的url
    ```yaml
    sa-token:
      multiple:
        login:
          match:
            - /tool/gen/**
            - /auth/**
            - /system/**
            - /monitor/**
            - /resource/**
            - /demo/**
    ```
2. 在非web环境下，需要包装到 `TenantHelper.ignore` 中执行或使用 `@DynamicTenant` 注解中读取租户

## 租户套餐修改后，权限没有变化

租户套餐修改关联的菜单后，需要点击同步套餐按钮，同步到租户中
::: tip
v1.1.0版本 已支持租户套餐变更后，同步到所有租户上
:::

## 前端在切换导航时会偶发空白页的问题

1. 组件名称重复会导致页面空白（概率最高）
2. 与HTML预定义的组件名称相同（例如：Menu、Table）
3. 存在多个根组件（可能导致，不一定）
4. 代码报错
5. 代码热更新后，切换到其他页面会白屏（刷新页面）

## 读取不到租户

用户自身携带租户标识，因此进入需要授权的页面时，能够读取用户绑定的租户。

由于非授权页面，例如客户端首页，小程序首页等无需登录即可访问的页面，由于没有用户信息，因此后端读取不到租户id。

此时可以使用租户管理下的应用管理，在请求头中携带X-APP-KEY，可以路由到指定的租户下。这个key可以是一个域名、appid等任何可以标识用户租户身份的值。

## bean of type 'XXXMapper' that could not be found.导致启动报错 

例如以下报错信息：

::: details 报错信息
```java
***************************
APPLICATION FAILED TO START
***************************

Description:

Parameter 0 of constructor in org.dromara.system.service.impl.SysTenantServiceImpl required a bean of type 'org.dromara.system.mapper.SysUserMapper' that could not be found.

The injection point has the following annotations:
	- @org.springframework.beans.factory.annotation.Autowired(required=true)


Action:

Consider defining a bean of type 'org.dromara.system.mapper.SysUserMapper' in your configuration.
```
:::

此时可以排查在 `ruoyi-common` 文件夹下是否多出一个 `target` 目录，该目录会导致启动报错

修复步骤： 使用maven clean > 重新加载Maven项目（刷新maven） > 重新启动项目(重新编译)
