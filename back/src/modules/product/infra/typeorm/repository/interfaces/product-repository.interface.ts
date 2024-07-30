import { Product } from '../../entities/product..entity';

export interface IProductRepository {
  findAll(amount: number, page: number): Promise<Product[]>;
  countProducts(): Promise<number>;
}
