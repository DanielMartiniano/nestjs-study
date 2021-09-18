import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
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
    const products = await this.ProductService.getAll();
    if(!products.length) throw new NotFoundException()
    
    return products;
  }

  @Get(':id')
  async getOne(@Param() params): Promise<Product> {
    const product = await this.ProductService.getOne(params.id);
    if(!product) throw new NotFoundException()
    
    return product;
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
