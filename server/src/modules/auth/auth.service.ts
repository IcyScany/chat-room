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

  async register(user: User): Promise<any> {
    delete user.userId
    const newUser =  await this.userRepository.save(user)
    return {
      msg: '注册成功',
      data: {
        user: newUser,
        token: this.jwtService.sign({ userId: newUser.userId, password: newUser.password })
      }
    }
  }
}
