import { Socket, Server } from 'socket.io'
import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { UserMap } from '../friend/entity/friend.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { FriendMessage } from '../friend/entity/friendMessage.entity'
import { createWriteStream } from 'fs'
import path from 'path'

@WebSocketGateway(4000, {cors: true})
export class ChatGateway{
  constructor(
    @InjectRepository(UserMap)
    private readonly friendRepository: Repository<UserMap>,
    @InjectRepository(FriendMessage)
    private readonly friendMessageRepository: Repository<FriendMessage>
  ){}

  @WebSocketServer()
  server: Server

  @SubscribeMessage('message')
  handleMessage(client: Socket, data: string) {
    //向除自己以外的人广播
    client.broadcast.emit('message', data)
    this.server.emit('message', data)
  }

  // // 私聊socket连接
  // @SubscribeMessage('joinFriendSocket')
  // async joinFriend(@ConnectedSocket() client: Socket, @MessageBody() data: UserMap): Promise<any> {    
  //   if(data.userId && data.friendId) {
  //     const relation = await this.friendRepository.findOne({where: {userId: data.userId, friendId:data.friendId}})      
  //     const roomId = data.userId > data.friendId ? data.friendId + data.friendId : data.friendId + data.userId
  //     if(relation){
  //       client.join(roomId)
  //       this.server.to(data.userId).emit('joinFriendSocket', {code:RCode.OK, msg:'进入私聊socket成功', data: relation})
  //     }
  //   }
  // }

  // // 发送消息
  // @SubscribeMessage('chat')
  // async sendMessage(@MessageBody() data: FriendMessageDto, @ConnectedSocket() client: Socket):Promise<any>{
  //   if(data.userId && data.friendId){
  //     const roomId = data.userId > data.friendId ? data.userId + data.friendId : data.friendId + data.userId
  //     // if(data.messageType === 'image'){
  //     //   const randomName = `${Date.now()}$${roomId}$${data.width}$${data.height}`
  //     //   const stream = createWriteStream(path.join('public/static', randomName))
  //     //   stream.write(data.content)
  //     //   data.content = randomName
  //     // }
  //     data.time = new Date().valueOf()
  //     await this.friendMessageRepository.save(data)
  //     this.server.to(roomId).emit('friendMessage', {code: RCode.OK, msg:'', data})
  //   } else {
  //     this.server.to(data.userId).emit('friendMessage', {code: RCode.FAIL, msg:'你没资格发消息', data})
  //   }
  // }
}
