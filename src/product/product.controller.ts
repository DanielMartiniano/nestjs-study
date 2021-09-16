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

@Controller('produtos')
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
  @HttpCode(204)
  async create(@Body() produto: Product) {
    return this.ProductService.create(produto);
  }

  @Put()
  async update(@Body() produto: Product): Promise<[number, Product[]]> {
    return this.ProductService.update(produto);
  }

  @Delete(':id')
  async destroy(@Param() params) {
    return this.ProductService.destroy(params.id);
  }
}
