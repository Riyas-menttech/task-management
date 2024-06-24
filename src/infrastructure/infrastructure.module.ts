import { Module } from '@nestjs/common';
import { InfrastructureService } from './infrastructure.service';
import { InfrastructureResolver } from './infrastructure.resolver';

@Module({
  providers: [InfrastructureResolver, InfrastructureService],
})
export class InfrastructureModule {}
