import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { InfrastructureModule } from './modules/infrastructure/infrastructure.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    DatabaseModule, 
    UserModule, InfrastructureModule, TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
