import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InfrastructureService } from './infrastructure.service';
import { Infrastructure } from './entities/infrastructure.entity';
import { CreateInfrastructureInput } from './dto/create-infrastructure.input';
import { UpdateInfrastructureInput } from './dto/update-infrastructure.input';

@Resolver(() => Infrastructure)
export class InfrastructureResolver {
  constructor(private readonly infrastructureService: InfrastructureService) {}

  @Mutation(() => Infrastructure)
  createInfrastructure(@Args('createInfrastructureInput') createInfrastructureInput: CreateInfrastructureInput) {
    return this.infrastructureService.create(createInfrastructureInput);
  }

  @Query(() => [Infrastructure], { name: 'infrastructure' })
  findAll() {
    return this.infrastructureService.findAll();
  }

  @Query(() => Infrastructure, { name: 'infrastructure' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.infrastructureService.findOne(id);
  }

  @Mutation(() => Infrastructure)
  updateInfrastructure(@Args('updateInfrastructureInput') updateInfrastructureInput: UpdateInfrastructureInput) {
    return this.infrastructureService.update(updateInfrastructureInput.id, updateInfrastructureInput);
  }

  @Mutation(() => Infrastructure)
  removeInfrastructure(@Args('id', { type: () => Int }) id: number) {
    return this.infrastructureService.remove(id);
  }
}
