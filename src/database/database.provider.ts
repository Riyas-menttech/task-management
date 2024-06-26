import { DataSource } from 'typeorm';
import { ConfigService } from '../common/constants/config/config.service';
// import { Infrastructure } from 'src/modules/infrastructure/entities/infrastructure.entity';
// import { User } from 'src/modules/user/entities/user.entity';

export const databaseProviders = [
  
  {
    provide: DataSource,
    inject : [ConfigService],
    useFactory: async (configService : ConfigService) => {
      try {    
        
          const dataSource = new DataSource({
          type: configService.getDatabaseConfig().dialect as 'postgres',
          host: configService.getDatabaseConfig().host ,
          port: configService.getDatabaseConfig().port ,
          username: configService.getDatabaseConfig().username ,
          password: configService.getDatabaseConfig().password ,
          database: configService.getDatabaseConfig().database,
          entities: [
              __dirname.split('database')[0] + 'modules/**/entities/**.entity{.ts,.js}',
              // Infrastructure,
              // User
          ],
          synchronize: true, 
          // logging : true
        });
  
        return await  dataSource.initialize();
        
      } catch (error) {

        console.log(error ,"error in connecting db")
        
      }
      
    },
  },
];








