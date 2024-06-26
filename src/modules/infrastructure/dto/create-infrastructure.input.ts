import { InputType, Int, Field } from '@nestjs/graphql';
import { User } from 'src/modules/user/entities/user.entity';

@InputType()
export class CreateInfrastructureInput {
  @Field(() => Int)
  ownerId: number;

  @Field()
  infra_name: string;

  @Field(() => [Int], { nullable: true })
  infra_mem: User[];

  @Field(() => [Int], { nullable: true })
  owners: User[];
}
 