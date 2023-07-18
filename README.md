# ChatRoom

@ author IcyScany \
@ 2023-04-25 \
  这是一个聊天室的项目，将要开发一个简单的全栈项目， \
  前端将使用VUE3框架搭建，后端将使用nestjs搭建。


## 1. 库表：
### 1.1 用户-user
  | 内容 | 字段名 |
  | ---- | ---- |
  | uuid |  userId |
  | 用户名 | username |
  | 密码 |  password |
  | 创建时间 |  createTime |


## 2. 后端接口：
2.1 应用部分-auth

2.1.1 注册-auth/register
- params： 
  ```
  user
  ```

- 响应： 成功 - 
  ```
    code,
    msg, 
    data:
        user，
        token
   ```

- 规则： 用户名不可重复


2.1.1 登录-auth/login
- params： 
  ```
  user
  ```

- 响应： 成功 - 
  ```
    code,
    msg, 
    data:
        user，
        token
   ```
  

## 3. 前端：
- 密码校验（后期优化：长度等规则）


