import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DatabaseModule } from 'src/database/database.module';
import { Product } from './product.model';
import { ProdutosController } from './product.controller';
import { ProductService } from './product.service';

const sequelizeFeature = SequelizeModule.forFeature([Product]);

@Module({
  imports: [DatabaseModule, sequelizeFeature],
  controllers: [ProdutosController],
  providers: [ProductService],
})
export class ProdutoModule {}
