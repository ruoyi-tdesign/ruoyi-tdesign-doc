# 多数据源
- - -
### 关于多数据源事务 具体参考 `事务相关` 文档说明

### 多数据源框架功能介绍
多数据源框架官方文档: [dynamic-datasource文档](https://www.kancloud.cn/tracy5546/dynamic-datasource/2264611)

* 支持 数据源分组 ，适用于多种场景 纯粹多库 读写分离 一主多从 混合模式。
* 支持数据库敏感配置信息 加密 ENC()。
* 支持每个数据库独立初始化表结构schema和数据库database。
* 支持无数据源启动，支持懒加载数据源（需要的时候再创建连接）。
* 支持 自定义注解 ，需继承DS(3.2.0+)。
* 提供并简化对Druid，HikariCp，BeeCp，Dbcp2的快速集成。
* 提供对Mybatis-Plus，Quartz，ShardingJdbc，P6sy，Jndi等组件的集成方案。
* 提供 自定义数据源来源 方案（如全从数据库加载）。
* 提供项目启动后 动态增加移除数据源 方案。
* 提供Mybatis环境下的 纯读写分离 方案。
* 提供使用 spel动态参数 解析数据源方案。内置spel，session，header，支持自定义。
* 支持 多层数据源嵌套切换 。（ServiceA >>> ServiceB >>> ServiceC）。
* 提供 基于seata的分布式事务方案。
* 提供 本地多数据源事务方案。 附：不能和原生spring事务混用。

### 用法说明

> 加载顺序 `方法 => 类 => 默认`<br>

使用 @DS 切换数据源。<br>
@DS 可以注解在方法上或类上，同时存在就近原则 方法上注解 优先于 类上注解。<br>

| 注解            | 结果                      |
|---------------|-------------------------|
| 没有@DS         | 默认数据源                   |
| @DS("dsName") | dsName可以为组名也可以为具体某个库的名称 |
```java
@Service
@DS("slave")
public class UserServiceImpl implements UserService {

  @Autowired
  private JdbcTemplate jdbcTemplate;

  public List selectAll() {
    return  jdbcTemplate.queryForList("select * from user");
  }
  
  @Override
  @DS("slave_1")
  public List selectByCondition() {
    return  jdbcTemplate.queryForList("select * from user where age >10");
  }
}
```

### 配置方式

```yaml
--- # 数据源配置
spring:
  datasource:
    # 动态数据源文档 https://www.kancloud.cn/tracy5546/dynamic-datasource/content
    dynamic:
      # 性能分析插件(有性能损耗 不建议生产环境使用)
      p6spy: true
      # 设置默认的数据源或者数据源组,默认值即为 master
      primary: master
      # 严格模式 匹配不到数据源则报错
      strict: true
      datasource:
        # 主库数据源
        master:
          type: ${spring.datasource.type}
          driverClassName: com.mysql.cj.jdbc.Driver
          # jdbc 所有参数配置参考 https://lionli.blog.csdn.net/article/details/122018562
          # rewriteBatchedStatements=true 批处理优化 大幅提升批量插入更新删除性能(对数据库有性能损耗 使用批量操作应考虑性能问题)
          url: jdbc:mysql://127.0.0.1:3306/ruoyi-tdesign?useUnicode=true&characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=true&serverTimezone=GMT%2B8&autoReconnect=true&rewriteBatchedStatements=true&allowPublicKeyRetrieval=true
          username: ruoyi-tdesign
          password: 123456
        # 从库数据源
        slave:
          lazy: true
          type: ${spring.datasource.type}
          driverClassName: com.mysql.cj.jdbc.Driver
          url: jdbc:mysql://localhost:3306/ruoyi-tdesign?useUnicode=true&characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=true&serverTimezone=GMT%2B8&autoReconnect=true&rewriteBatchedStatements=true&allowPublicKeyRetrieval=true
          username:
          password:
```

### 数据库异构

例如: `mysql + oracle` 参考对应多数据源框架文档 [dynamic-ds文档](https://www.kancloud.cn/tracy5546/dynamic-datasource)

```
# 多主多从           纯粹多库（记得设置primary）            混合配置
spring:                    spring:                        spring:
  datasource:                datasource:                    datasource:
    dynamic:                   dynamic:                       dynamic:
      datasource:                datasource:                    datasource:
        master_1:                  mysql:                         master:
        master_2:                  oracle:                        slave_1:
        slave_1:                   sqlserver:                     slave_2:
        slave_2:                   postgresql:                    oracle_1:
        slave_3:                   h2:                            oracle_2:
```
