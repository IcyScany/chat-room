import { Controller ,Get, Query } from '@nestjs/common'
import { FriendService } from './friend.service'

@Controller('friend')
export class FriendController {
  constructor(private readonly friendService: FriendService) {}
  
  @Get()
  getFriend(@Query('userId') userId:string){
    return this.friendService.getFriends(userId)
  }

  @Get('/friendMessages')
  getFriendMessage(@Query() query: any){
    return this.friendService.getFriendMessage(query.userId, query.friendId, query.current, query.pageSize)
  }
}