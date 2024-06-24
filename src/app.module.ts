import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { InfrastructureModule } from './modules/infrastructure/infrastructure.module';
import { TasksModule } from './modules/tasks/tasks.module';

@Module({
  imports: [UserModule, InfrastructureModule, TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
