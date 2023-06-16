import { Module } from '@nestjs/common'
import { ChatGateway } from './chat.gateway'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserMap } from '../friend/entity/friend.entity'
import { FriendMessage } from '../friend/entity/friendMessage.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([UserMap, FriendMessage])
  ],
  providers: [ChatGateway]
})
export class ChatModule{}
