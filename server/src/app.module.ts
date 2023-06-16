import { Module } from '@nestjs/common'
import { ChatModule } from './modules/chat/chat.module'
import { FriendModule } from './modules/friend/friend.module'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      port: 3306,
      username: 'root',
      password: 'scany0605',
      database: 'chat0',
      charset: 'utf8mb4',
      autoLoadEntities: true,
      synchronize: true
    }),
    ChatModule,
    FriendModule
  ],
})
export class AppModule {}
