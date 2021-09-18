import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Controller('product')
export class ProdutosController {
  constructor(private ProductService: ProductService) {}

  @Get()
  async getAll(): Promise<Product[]> {
    return this.ProductService.getAll();
  }

  @Get(':id')
  async getOne(@Param() params): Promise<Product> {
    return this.ProductService.getOne(params.id);
  }

  @Post()
  async create(@Body() product: Product): Promise<Product> {
    return this.ProductService.create(product);
  }

  @Put()
  async update(@Body() product: Product): Promise<[number, Product[]]> {
    return this.ProductService.update(product);
  }

  @Delete(':id')
  async destroy(@Param() params) {
    return this.ProductService.destroy(params.id);
  }
}
