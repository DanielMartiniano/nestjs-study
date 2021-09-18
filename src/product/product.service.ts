import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product)
    private productModel: typeof Product,
  ) {}

  async getAll(): Promise<Product[]> {
    return this.productModel.findAll({ raw: true });
  }

  async getOne(id: number): Promise<Product> {
    return this.productModel.findByPk(id, { raw: true });
  }

  async create(product: Product): Promise<Product> {
    return this.productModel.create(product.get()).then(res => res.get());
  }

  async update(product: Product): Promise<[number, Product[]]> {
    product = product.get();
    return this.productModel.update(product, {
      where: {
        id: product.id,
      },
    });
  }

  async destroy(id: number) {
    const product: Product = await this.getOne(id);
    product.destroy();
  }
}
