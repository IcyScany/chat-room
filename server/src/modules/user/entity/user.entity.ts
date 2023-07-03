import { Entity, Column, PrimaryGeneratedColumn, Double, Generated } from 'typeorm'

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
