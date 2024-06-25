import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateInfrastructureInput {
  @Field(() => Int)
  ownerId: number;

  @Field()
  infra_name: string;

  @Field(() => [Int], { nullable: true })
  infra_mem: number[];

  @Field(() => [Int], { nullable: true })
  owners: number[];
}
