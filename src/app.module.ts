import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutoModule } from './product/product.module';

@Module({
  imports: [ProdutoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
