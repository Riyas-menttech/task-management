import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Infrastructure } from 'src/modules/infrastructure/entities/infrastructure.entity';
import { User } from 'src/modules/user/entities/user.entity';
// import { User } from 'src/modules/user/entities/user.entity';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Task {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Field()
  @Column()
  infrastructureId: number;

  @Field(() => Infrastructure, { nullable: true })
  @ManyToOne(() => Infrastructure, { eager: true })
  @JoinColumn({ name: 'infrastructureId', referencedColumnName: 'id' })
  infrastructure: Infrastructure;

  @Column()
  @Field()
  content: string;

  @Column()
  @Field({ nullable: true })
  feedback?: string;

  @Column({ default: false })
  @Field({ defaultValue: false })
  status: boolean;

  // @ManyToOne(() => User, {
  //   cascade: true,eager:true
  // })
  // @JoinColumn({
  //   name: "assigned_users",
  //   referencedColumnName: 'id',
  // },
  // })
  @Column('simple-array', { nullable: true })
  @Field(() => [User] , { nullable: true })
  assigned_users:  User[] ;
}

