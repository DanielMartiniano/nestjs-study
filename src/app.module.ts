import { ClassSerializerInterceptor, HttpException, Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AllExceptionsFilter } from './commom/filters/exception.filter';
import { ProdutoModule } from './product/product.module';

const Interceptor = {
  provide: APP_INTERCEPTOR,
  useClass: ClassSerializerInterceptor
}

const Filter = {
  provide: APP_FILTER,
  useClass: AllExceptionsFilter
}

@Module({
  imports: [ProdutoModule],
  controllers: [AppController],
  providers: [AppService, Interceptor, Filter],
})

export class AppModule {}
