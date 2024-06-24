import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Infrastructure {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
