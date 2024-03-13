# 数据脱敏

> 系统使用 Jackson 序列化策略 对标注了 `@Sensitive` 注解的属性进行脱敏处理

## 手机号脱敏
> 【手机号码】前三位，后4位，其他隐藏，比如135****2210
```java
public class POJO {
    @Sensitive(strategy = SensitiveStrategy.PHONE)
    private String phone;
}
```

## 身份证脱敏
> 【身份证号】前3位 和后4位
```java
public class POJO {
    @Sensitive(strategy = SensitiveStrategy.ID_CARD)
    private String idcard;
}
```

## 地址脱敏
> 【地址】只显示到地区，不显示详细地址，比如：北京市海淀区********
```java
public class POJO {
    @Sensitive(strategy = SensitiveStrategy.ADDRESS)
    private String address;
}
```

## 邮箱脱敏
> 【电子邮箱】邮箱前缀仅显示第一个字母，前缀其他隐藏，用星号代替，@及后面的地址显示，比如：d**@126.com
```java
public class POJO {
    @Sensitive(strategy = SensitiveStrategy.EMAIL)
    private String email;
}
```

## 银行卡脱敏
> 【银行卡号脱敏】由于银行卡号长度不定，所以只展示前4位，后面的位数根据卡号决定展示1-4位 例如：
> 1. "1234 2222 3333 4444 6789 9"    ->   "1234 **** **** **** **** 9"  
> 2. "1234 2222 3333 4444 6789 91"   ->   "1234 **** **** **** **** 91"  
> 3. "1234 2222 3333 4444 678"       ->    "1234 **** **** **** 678"  
> 4. "1234 2222 3333 4444 6789"      ->    "1234 **** **** **** 6789"
```java
public class POJO {
    @Sensitive(strategy = SensitiveStrategy.BANK_CARD)
    private String bankCard;
}
```
## 自定义策略
在类 `org/dromara/common/sensitive/core/SensitiveStrategy.java` 下修改添加自定义策略
