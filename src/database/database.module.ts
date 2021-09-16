import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

const config = ConfigModule.forRoot({
  isGlobal: true,
});

const sequelize = SequelizeModule.forRoot({
  dialect: 'mysql',
  host: process.env.HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DB,
  autoLoadModels: true,
  synchronize: true,
});

@Module({
  imports: [config, sequelize],
})
export class DatabaseModule {}
