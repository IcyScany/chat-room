import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { UserMap } from './entity/friend.entity'
import { FriendMessage } from './entity/friendMessage.entity'

@Injectable()
export class FriendService {
  constructor(
    @InjectRepository(UserMap)
    private readonly friendRepository: Repository<UserMap>,
    @InjectRepository(FriendMessage)
    private readonly friendMessageRepository: Repository<FriendMessage>
  ){}

  async getFriends(userId: string){
    try{
      if(userId){
        return { msg:'获取好友成功', data: await this.friendRepository.find({where: {userId: userId}})}
      } else{
        return { msg:'获取好友失败', data: await this.friendRepository.find() }
      }
    }
    catch(err){
      return {code:'2', msg: '获取好友失败', data: err }
    }
  }

  async getFriendMessage(userId: string, friendId: string, current: number, pageSize: number){
    const messages = await this.friendMessageRepository
      .createQueryBuilder('friendMessage')
      .orderBy('friendMessage.time', 'DESC')
      .where('friendMessage.userId = :userId AND friendMessage.friendId = :friendId', {userId: userId, friendId: friendId})
      .orWhere('friendMessage.userId = :friendId AND friendMessage.friendId = :friendId', {userId: userId, friendId: friendId})
      .skip(current)
      .take(pageSize)
      .getMany()
    return { msg: '', data:{ messageArr: messages.reverse() }}
  }
}
