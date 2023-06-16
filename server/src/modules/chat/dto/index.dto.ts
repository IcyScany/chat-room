interface FriendDto {
  userId: string
  userrname: string
  createTime: number
}


interface FriendMessageDto {
  userId: string
  friendId: string
  content: string
  messageType: string
  time: number
  width?: number
  height?: number
}
