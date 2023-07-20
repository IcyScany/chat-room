import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from '../user/entity/user.entity'
import { Repository } from 'typeorm'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService
  ){}

  // 1. 登录
  async login(user: User): Promise<any> {
    const loginUser = await this.userRepository.findOne({where: { username: user.username, password: user.password }})
    if (!loginUser) {
      return {
        code: 1,
        msg: '账号或密码错误'
      }
    }

    return {
      code: 0,
      msg: '登录成功',
      data: {
        user: loginUser,
        token: this.jwtService.sign({ userId: user.userId, password: user.password })
      }
    }
  }

  // 2. 注册
  async register(user: User): Promise<any> {
    const hasUser = await this.userRepository.find({where: { username: user.username }})
    if (hasUser.length) return {
      code: 1,
      msg: '用户名重复！'
    }

    delete user.userId
    user.createTime = new Date().valueOf()
    const newUser =  await this.userRepository.save(user)
    return {
      code: 0,
      msg: '注册成功',
      data: {
        user: newUser,
        token: this.jwtService.sign({ userId: newUser.userId, password: newUser.password })
      }
    }
  }
}
