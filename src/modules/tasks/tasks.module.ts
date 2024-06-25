import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksResolver } from './tasks.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { User } from '../user/entities/user.entity';
import { Infrastructure } from '../infrastructure/entities/infrastructure.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Task,User,Infrastructure])],
  providers: [TasksResolver, TasksService],
})
export class TasksModule {}
