import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { User } from '../user/entity/user.entity'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { LocalStrategy } from './local.strategy'
import { JwtStrategy } from './jwt.strategy'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'scySecret',
      signOptions: { expiresIn: '3s' }
    }),
    PassportModule   
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}

