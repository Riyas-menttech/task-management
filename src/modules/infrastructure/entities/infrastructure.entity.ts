import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from '../../user/entities/user.entity'; // Assuming the User entity is defined in user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Infrastructure {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  ownerId: number; // This column stores the id of the User entity

  @Field(() => User, { nullable: true })
  @ManyToOne(() => User, { eager: true }) // Ensure eager loading to fetch User data automatically
  @JoinColumn({ name: 'ownerId', referencedColumnName: 'id' }) // Specify the name of the column in the database
  owner: User; // This will hold the entire User object


  @Field()
  @Column()
  infra_name: string;


  @Field(() => [Int], { nullable: true })
  @Column('simple-array', { nullable: true })
  infra_mem: number[]; // This column stores an array of user.id values

 
  @Field(() => [Int], { nullable: true })
  @Column('simple-array', { nullable: true })
  owners: number[]; // This column stores an array of user.id values

  
}
