import { Injectable } from '@nestjs/common';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { In, Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { Infrastructure } from '../infrastructure/entities/infrastructure.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepo: Repository<Task>,
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(Infrastructure) private infraRepo: Repository<Infrastructure>,
  ) {}
  async create(createTaskInput: CreateTaskInput) {
    const saved = await this.taskRepo.save(createTaskInput);
    console.log(saved, 'saved is here');

    return { ...saved };
  }

  async findAll() {
    const data = await this.taskRepo.find();
    for (const task of data) {
      const newData = await this.userRepo.findBy({
        id: In(task.assigned_users),
      });
      task.assigned_users = newData;
      // const newMem = await this.infraRepo.findBy({ id: In(task.infrastructure.infra_mem) })
      // task.infrastructure.infra_mem = newMem
    }
    console.log(data, 'data here');
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskInput: UpdateTaskInput) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
