import { Strategy, ExtractJwt } from 'passport-jwt'
import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { User } from '../user/entity/user.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromHeader('token'),
      ignoreExpiration: false,
      secretOrKey: 'scySecret'
    })
  }

  async validate(payload: User) {
    const user = this.userRepository.findOne({ where: { userId: payload.userId, password: payload.password } })
    if (!user) {
      return false
    }
    return { username: payload.username, password: payload.username }
  }
}
