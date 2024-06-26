import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';
import { UserRole } from '../entities/user.entity';  // Adjust the import path as necessary
import { InputType } from '@nestjs/graphql';
@InputType()
export class CreateUserInput {
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name is required' })
  @Length(1, 50)
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Password is required' })
  @Length(8, 100)
  password: string;
  
  @IsEnum(UserRole)
  @IsOptional()
  role?: UserRole = UserRole.USER;
}