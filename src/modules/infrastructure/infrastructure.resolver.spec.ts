import { Test, TestingModule } from '@nestjs/testing';
import { InfrastructureResolver } from './infrastructure.resolver';
import { InfrastructureService } from './infrastructure.service';

describe('InfrastructureResolver', () => {
  let resolver: InfrastructureResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InfrastructureResolver, InfrastructureService],
    }).compile();

    resolver = module.get<InfrastructureResolver>(InfrastructureResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
