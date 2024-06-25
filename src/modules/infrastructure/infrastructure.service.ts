import { Injectable } from '@nestjs/common';
import { CreateInfrastructureInput } from './dto/create-infrastructure.input';
import { UpdateInfrastructureInput } from './dto/update-infrastructure.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Infrastructure } from './entities/infrastructure.entity';
import { Repository } from 'typeorm';


@Injectable()
export class InfrastructureService {

constructor(@InjectRepository(Infrastructure) private InfraRepo :Repository<Infrastructure>){}

  async create(createInfrastructureInput: CreateInfrastructureInput) {
    console.log(createInfrastructureInput,"service create")
    const saved = await this.InfraRepo.save(createInfrastructureInput)
    console.log({...saved},"saved <<<<")
    return {...saved}
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
