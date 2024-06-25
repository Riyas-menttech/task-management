import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
// import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Mutation(() => User)
  async signup(
    @Args('name') name: string,
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<User> {
    return this.userService.create({ name, email, password });
  }
  // async signin(
  //   @Args('email') email: string,
  //   @Args('password') password: string,
  // ): Promise<{ access_token: string }> {
  //   return this.userService.signIn({email, password});
  // }
  @Query(()=>[User])
  findAllUser() {
    return this.userService.findAll();
  }
  @Query(() => User,)
  findneUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOne(id);
  }
  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput, @Context('user') user: {id:number, role:string}) {
    return this.userService.update(user.id, updateUserInput);
  }
  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.remove(id);
  }
}