# 接口放行

## 使用方式一：配置文件

::: code-group
```yaml:line-numbers=148 [application.yml]
# security配置
security:
  # 排除路径
  excludes:
    # 静态资源
    - /*.html
    - /**/*.html
    - /**/*.css
    - /**/*.js
    # 公共路径
    - /favicon.ico
    - /error
    # swagger 文档配置
    - /*/api-docs
    - /*/api-docs/**
    # actuator 监控配置
    - /actuator
    - /actuator/**
```
:::

## 使用方式二：@SaIgnore注解

支持在类或方法上放行<br>
**注意: 动态路径会解析成通配符 请设计好接口路径避免问题**

**例如: `/get/{userId}` 会解析成 `/get/*`**<br>

使用 `@SaIgnore` 可表示一个接口[忽略认证](https://sa-token.cc/doc.html#/use/at-check?id=_5%e3%80%81%e5%bf%bd%e7%95%a5%e8%ae%a4%e8%af%81)：
```java
@SaCheckLogin
@RestController
public class TestController {
    
    // ... 其它方法 
    
    // 此接口加上了 @SaIgnore 可以游客访问 
    @SaIgnore
    @RequestMapping("getList")
    public SaResult getList() {
        // ... 
        return SaResult.ok(); 
    }
}
```
如上代码表示：`TestController` 中的所有方法都需要登录后才可以访问，但是 `getList` 接口可以匿名游客访问。

- @SaIgnore 修饰方法时代表这个方法可以被游客访问，修饰类时代表这个类中的所有接口都可以游客访问。
- @SaIgnore 具有最高优先级，当 @SaIgnore 和其它鉴权注解一起出现时，其它鉴权注解都将被忽略。
- @SaIgnore 同样可以忽略掉 Sa-Token 拦截器中的路由鉴权。

## 注意事项
- 接口放行后不需要token即可访问
- 但是没有token也就无法获取用户信息与鉴权
- [接口放行后读取不到租户？](../issue.md#读取不到租户)

## 解决方案
- 删除接口上的鉴权注解
- 删除接口内获取用户信息功能
- 删除数据库实体类 自动注入 `createBy` `updateBy` 因为会获取用户数据
