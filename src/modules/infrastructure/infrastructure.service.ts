import { Injectable } from '@nestjs/common';
import { CreateInfrastructureInput } from './dto/create-infrastructure.input';
import { UpdateInfrastructureInput } from './dto/update-infrastructure.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Infrastructure } from './entities/infrastructure.entity';
import { In, Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';

@Injectable()
export class InfrastructureService {
  constructor(
    @InjectRepository(Infrastructure)
    private InfraRepo: Repository<Infrastructure>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createInfrastructureInput: CreateInfrastructureInput) {
    const saved = await this.InfraRepo.save(createInfrastructureInput);
    return saved;
  }

  async findAllInfra() {
    const AllInfra = await this.InfraRepo.find();
    for (const infra of AllInfra) {
      
      if (infra.owners) {
        const ownerUsers = await this.userRepository.findBy({
          id: In(infra.owners),
        });
  
        infra.owners = ownerUsers;
      }
      if (infra.infra_mem) {
        const infra_mem = await this.userRepository.findBy({
          id: In(infra.infra_mem),
        });
  
        infra.infra_mem = infra_mem;
      }
    }

    return AllInfra
  }

  async findOne(id: number) {
    const infra = await this.InfraRepo.findOne({
      where: { id },
      // relations: ['owner'],
    });
    if (infra.owners) {
      const ownerUsers = await this.userRepository.findBy({
        id: In(infra.owners),
      });
      console.log(ownerUsers, 'service find one ');

      infra.owners = ownerUsers;
    }
    if (infra.infra_mem) {
      const infra_mem = await this.userRepository.findBy({
        id: In(infra.infra_mem),
      });
      console.log(infra_mem, 'service find one ');

      infra.infra_mem = infra_mem;
    }

    return infra;
  }

  update(id: number, updateInfrastructureInput: UpdateInfrastructureInput) {
    return `This action updates a #${id} infrastructure`;
  }

  remove(id: number) {
    return `This action removes a #${id} infrastructure`;
  }
}
