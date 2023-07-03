import { Module } from '@nestjs/common'
import { ChatModule } from './modules/chat/chat.module'
import { FriendModule } from './modules/friend/friend.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthModule } from './modules/auth/auth.module'
import { UserModule } from './modules/user/user.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'scany0605',
      database: 'chat0',
      charset: 'utf8mb4',
      autoLoadEntities: true,
      // synchronize: true
    }),
    ChatModule,
    FriendModule,
    AuthModule,
    UserModule
  ],
}) 
export class AppModule {}
