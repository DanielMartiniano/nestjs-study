import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { IsEmail, IsNotEmpty, IsNumber, isNumber, IsString } from 'class-validator';

@Table
export class Product extends Model<Product> {
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
}
