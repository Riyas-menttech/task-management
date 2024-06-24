import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config'




console.log(ConfigService,'hello');

const AppDataSource: any = new DataSource({
  type: 'postgres',
  database: process.env.DB,
  entities: [],
  synchronize: true,
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
    // autoLoadEntities: true,
});

AppDataSource.initialize();

export default AppDataSource;
