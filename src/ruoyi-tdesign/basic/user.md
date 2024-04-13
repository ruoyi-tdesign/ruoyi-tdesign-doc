# 系统用户相关

> 框架采用sa-token控制权限 并对sa-token的api做了一定的业务封装<br>

## 用户登录

> 参考自带多种登录实现 不限制用户数据来源 只需要构建 LoginUser 即可完成登录<br>
> 例如: `同表不同类型` `不同表` `同表+扩展表`<br>

```java
// 此处可根据登录用户的数据不同 自行创建 loginUser
LoginUser loginUser = loginService.buildLoginUser(user);
loginUser.setClientKey(client.getClientKey());
loginUser.setDeviceType(client.getDeviceType());
SaLoginModel model = new SaLoginModel();
model.setDevice(client.getDeviceType());
// 自定义分配 不同用户体系 不同 token 授权时间 不设置默认走全局 yml 配置
// 例如: 后台用户30分钟过期 app用户1天过期
if (client.getTimeout() != null) {
    model.setTimeout(client.getTimeout());
}
if (client.getActiveTimeout() != null) {
    model.setActiveTimeout(client.getActiveTimeout());
}
// 生成token
LoginHelper.login(loginUser, model);
```

## 获取用户信息

> 完成登录后会生成登录token返回给前端 前端需要再请求头携带token 后端方可获取到对应的用户信息

请求头传递格式: `Authorization: Bearer token`

后端获取用户信息: 
```java
LoginUser user = LoginHelper.getLoginUser();
```

## 获取用户信息(基于token)
```java
LoginUser user = LoginHelper.getLoginUser(token);
```

## 获取登录用户id
```java
Long userId = LoginHelper.getUserId();
```

## 获取登录用户账户名
```java
String username = LoginHelper.getUsername();
```

## 获取登录用户所属租户id
```java
String tenantId = LoginHelper.getTenantId();
```

## 获取登录用户所属部门id
```java
Long deptId = LoginHelper.getDeptId();
```

## 获取登录用户类型
```java
UserType userType = LoginHelper.getUserType();
```

## 判断用户是否为超级管理员

```java
// 判断当前登录用户
boolean b = LoginHelper.isSuperAdmin();
// 判断用户基于id
boolean b = LoginHelper.isSuperAdmin(userId);
```

## 判断用户是否为租户管理员

```java
// 判断当前登录用户
boolean b = LoginHelper.isTenantAdmin();
// 判断用户基于角色组
boolean b = LoginHelper.isSuperAdmin(rolePermission);
```

## 使用多账户体系登录
> 分表默认内置了 `user` 账号类型的用户操作对象，只需要继承 `BaseUser` 使用 `LoginUserHelper` 操作即可完成登录

```yaml
sa-token:
  multiple:
    user: # user账号类型
      # token名称 (同时也是cookie名称)
      token-name: UserAuthorization
      match:
        - /user/**
```

```java
// 登录
LoginUserHelper.login(user);
// 退出
MultipleStpUtil.USER.logout();
```

请求头传递格式: `UserAuthorization: Bearer token`

### `user` 账号类型内置的权限相关注解
- `@SaUserCheckDisable`: 服务禁用校验：在没有被禁用指定服务的情况下才可以进入方法
- `@SaUserCheckLogin`: 只有登录之后才能进入该方法
- `@SaUserCheckPermission`: 权限认证校验：必须具有指定权限才能进入该方法
- `@SaUserCheckRole`: 角色认证校验：必须具有指定角色标识才能进入该方法
- `@SaUserCheckSafe`: 二级认证校验：必须二级认证之后才能进入该方法

## 其他更多操作
[Sa-Token 官方文档 - 登录认证](https://sa-token.cc/doc.html#/use/login-auth)
