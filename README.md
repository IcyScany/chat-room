# ChatRoom

@ author IcyScany \
@ 2023-04-25 \
  这是一个聊天室的项目，将要开发一个简单的全栈项目， \
  前端将使用VUE3框架搭建，后端将使用nestjs搭建。


## 应用部分
### 1. 用户注册
#### 1.1 库表：
- user
  | 内容 | 字段名 |
  | ---- | ---- |
  | uuid |  userId |
  | 用户名 | username |
  | 密码 |  password |
  | 创建时间 |  createTime |

#### 1.2 后端：
- params： 
  ```
  {
    username，
    password
  }
  ```

- 响应： 成功 - 
  ```
  {
    msg, 
    data:{
      user，
      token
    }
  }
   ```

- 规则： 用户名不可重复
  
#### 1.3 前端：
- 密码校验（后期优化：长度等规则）


### 2. 用户登录

