import { Injectable } from '@nestjs/common'
import { User } from './entity/user.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}

  async getUser(userId: string) {
    try {
      let data: User
      if (userId) {
        data = await this.userRepository.findOne({
          where: {userId: userId}
        })
      }
    } catch(err) {
      return { code: '2', msg:'获取用户失败', data:err}
    }
  }
}

