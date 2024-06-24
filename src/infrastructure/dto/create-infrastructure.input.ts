import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateInfrastructureInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
