import { Injectable } from '@nestjs/common';
import { CreateInfrastructureInput } from './dto/create-infrastructure.input';
import { UpdateInfrastructureInput } from './dto/update-infrastructure.input';

@Injectable()
export class InfrastructureService {
  create(createInfrastructureInput: CreateInfrastructureInput) {
    return 'This action adds a new infrastructure';
  }

  findAll() {
    return `This action returns all infrastructure`;
  }

  findOne(id: number) {
    return `This action returns a #${id} infrastructure`;
  }

  update(id: number, updateInfrastructureInput: UpdateInfrastructureInput) {
    return `This action updates a #${id} infrastructure`;
  }

  remove(id: number) {
    return `This action removes a #${id} infrastructure`;
  }
}
