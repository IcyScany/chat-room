import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  userId: string

  @Column()
  username: string

  @Column({ select: false })
  password: string

  @Column({ type: 'double', default: new Date().valueOf() })
  createTime: number
}
