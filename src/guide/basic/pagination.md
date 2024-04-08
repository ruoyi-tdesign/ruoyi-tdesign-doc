# 分页功能

## 重点说明

> 项目使用 [pagehelper](https://github.com/pagehelper/Mybatis-PageHelper) 分页插件 实现分页功能 <br>
> 同时也支持 `mybatis-plus` 分页插件 实现分页功能 大致用法与 MP 一致 [MP分页文档](https://baomidou.com/pages/97710a/) <br>
> 项目禁止分页合理化 页数溢出 例如: 一共5页 查了第6页 默认返回空数据 <br>

## 使用pagehelper插件分页

> 使用 `PageQuery` 接收分页参数，确保请求参数携带 `pageNum` 与 `pageSize` 具体参数参考 `PageQuery` <br>
> 使用 `SortQuery` 接收排序参数，确保请求参数携带 `orderByColumn` 与 `isAsc` 具体参数参考 `SortQuery` <br>

```java
@Override
public TableDataInfo<SysAppVo> queryPageList(SysAppQuery query) {
    // 注意：PageQuery#of 方法只会对第一条sql进行分页，如果有多个分页请分多次使用
    return PageQuery.of(() -> baseMapper.queryList(query));
}
```

也支持手动分页
```java
@Override
public TableDataInfo<SysAppVo> queryPageList(SysAppQuery query) {
    // 注意：PageQuery 方法只会对第一条sql进行分页，如果有多个分页请分多次使用
    return PageQuery.of(1, 10).execute(() -> baseMapper.queryList(query));
}
```

不分页，只进行排序
```java
@Override
public TableDataInfo<SysAppVo> queryPageList(SysAppQuery query) {
    // 注意：SortQuery 方法只会对第一条sql进行排序，如果有多个排序请分多次使用
    return SortQuery.of(() -> baseMapper.queryList(query));
}
```

::: tip
注意：使用 `PageQuery` 或 `SortQuery` 方法只会对第一条sql进行分页，如果有多个分页请分多次使用
:::


## 使用Page对象分页

> `Controller` 使用 `PageQuery` 接收分页参数 具体参数参考 `PageQuery`

TestDemoController.java
```java {6}
/**
 * 查询测试单表列表
 */
@SaCheckPermission("demo:demo:list")
@GetMapping("/list")
public TableDataInfo<TestDemoVo> list(@Validated(QueryGroup.class) TestDemoBo bo, PageQuery pageQuery) {
    return testDemoService.queryPageList(bo, pageQuery);
}
```

> 构建 `Mybatis-Plus` 分页对象 <br>
> 使用 `PageQuery#build()` 方法 可快速(基于当前对象数据)构建 `MP` 分页对象

TestDemoServiceImpl.java
```java {7}
/**
 * 自定义分页查询
 */
@Override
public TableDataInfo<TestDemoVo> customPageList(TestDemoBo bo, PageQuery pageQuery) {
    LambdaQueryWrapper<TestDemo> lqw = buildQueryWrapper(bo);
    Page<TestDemoVo> result = baseMapper.customPageList(pageQuery.build(), lqw);
    return TableDataInfo.build(result);
}
```

PageQuery.java
```java
// PageQuery.build()
public <T> Page<T> build() {
    Integer pageNum = ObjectUtil.defaultIfNull(getPageNum(), DEFAULT_PAGE_NUM);
    Integer pageSize = ObjectUtil.defaultIfNull(getPageSize(), DEFAULT_PAGE_SIZE);
    if (pageNum <= 0) {
        pageNum = DEFAULT_PAGE_NUM;
    }
    Page<T> page = new Page<>(pageNum, pageSize, isSearchCount);
    if (sortQuery != null) {
        List<OrderItem> orderItems = sortQuery.build();
        if (CollUtil.isNotEmpty(orderItems)) {
            page.addOrder(orderItems);
        }
    }
    return page;
}
```

具体用法与 `MP` 一致

> 自定义 `SQL` 方法分页 <br>
> 只需在 `Mapper` 方法第一个参数和返回值 重点: 第一个参数 标注分页对象

TestDemoMapper.java
```java
@DataPermission({
    @DataColumn(key = "deptName", value = "dept_id"),
    @DataColumn(key = "userName", value = "user_id")
})
Page<TestDemoVo> customPageList(@Param("page") Page<TestDemo> page, @Param("ew") Wrapper<TestDemo> wrapper); // [!code focus]
```

TestDemoMapper.xml
```xml {2}
<select id="customPageList" resultType="org.dromara.demo.domain.vo.TestDemoVo">
    SELECT * FROM test_demo ${ew.customSqlSegment}
</select>
```
