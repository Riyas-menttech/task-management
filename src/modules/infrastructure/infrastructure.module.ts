import { Module } from '@nestjs/common';
import { InfrastructureService } from './infrastructure.service';
import { InfrastructureResolver } from './infrastructure.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Infrastructure } from './entities/infrastructure.entity';
import { User } from '../user/entities/user.entity';

@Module({ 
  imports :[TypeOrmModule.forFeature([Infrastructure, User])],
  providers: [InfrastructureResolver, InfrastructureService],
})
export class InfrastructureModule {}
 