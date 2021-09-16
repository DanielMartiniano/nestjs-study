import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product)
    private produtoModel: typeof Product,
  ) {}

  async getAll(): Promise<Product[]> {
    return this.produtoModel.findAll();
  }

  async getOne(id: number): Promise<Product> {
    return this.produtoModel.findByPk(id);
  }

  async create(produto: Product): Promise<Product> {
    return this.produtoModel.create(produto);
  }

  async update(produto: Product): Promise<[number, Product[]]> {
    return this.produtoModel.update(produto, {
      where: {
        id: produto.id,
      },
    });
  }

  async destroy(id: number) {
    const produto: Product = await this.getOne(id);
    produto.destroy();
  }
}
