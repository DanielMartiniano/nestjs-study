import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutoModule } from './product/product.module';

const Interceptor = {
  provide: APP_INTERCEPTOR,
  useClass: ClassSerializerInterceptor
}
@Module({
  imports: [ProdutoModule],
  controllers: [AppController],
  providers: [AppService, Interceptor],
})
export class AppModule {}
