import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class UserService {
  constructor(
    // private jwtService: JwtService,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async create(details: CreateUserInput): Promise<User> {
    try {
      console.log(details ,"sign up service ")
      return await this.userRepository.save(details);
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }
  async signIn(details: {
    email: string;
    password: string;
  }): Promise<{ access_token: string }> { 
    const user = await this.userRepository.findOneBy({ email: details.email });
    const isMatched = true
    if (!isMatched) {
      throw new UnauthorizedException();
    }
    const payload = { id: user.id, role: user.role };
    return {
      access_token: "hihiiiii token ",
    };
  }
  findAll() {
    return  this.userRepository.find()
    // return `This action returns all user`;
  }
  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }
  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}