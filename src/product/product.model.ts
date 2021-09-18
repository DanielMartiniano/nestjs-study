import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Exclude } from 'class-transformer';

@Table
export class Product extends Model<Product> {
  @Exclude({
    toPlainOnly: true
  })
  @IsOptional()
  @IsNumber()
  id: number;
  
  @IsNotEmpty()
  @IsString()
  @Column({type: DataType.STRING(60), allowNull: false })
  sku: string;

  @IsNotEmpty()
  @IsString()
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  price: number;

  @Exclude()
  createdAt: string

  @Exclude()
  updatedAt: string
}
