import { CreateInfrastructureInput } from './create-infrastructure.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInfrastructureInput extends PartialType(CreateInfrastructureInput) {
  @Field(() => Int)
  id: number;
}
