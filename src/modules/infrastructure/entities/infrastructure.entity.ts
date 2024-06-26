import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from '../../user/entities/user.entity'; // Assuming the User entity is defined in user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, } from 'typeorm';

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


  @Field(() => [User], { nullable: true })
  @Column('simple-array', { nullable: true })
  infra_mem: User[]; // This column stores an array of user.id values

 
  @Field(() => [User], { nullable: true })
  @Column('simple-array', { nullable: true })
  owners: User[]; // This column stores an array of user.id values

  

  
}
 