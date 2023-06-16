import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class UserMap{
  @PrimaryGeneratedColumn()
  _id: number
  
  @Column()
  userId: string

  @Column()
  friendId: string
}
