import { InputType, Int, Field } from '@nestjs/graphql';
import { User } from 'src/modules/user/entities/user.entity';

@InputType()
export class CreateTaskInput {
 

  @Field(()=>Int)
  infrastructureId: number;
  @Field()
  content: string;

  @Field({ nullable: true })
  feedback?: string;

  @Field({ defaultValue: false })
  status: boolean;

  @Field(() => [Int], { nullable: true })
  assigned_users: User[];
}
