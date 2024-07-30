import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../entities/product..entity';
import { Repository } from 'typeorm';
import type { IProductRepository } from './interfaces/product-repository.interface';

@Injectable()
export class ProductRepository implements IProductRepository {
  constructor(
    @InjectRepository(Product)
    private repository: Repository<Product>,
  ) {}

  findAll(amount: number, page: number): Promise<Product[]> {
    return this.repository.find({
      take: amount,
      skip: amount * (page - 1),
    });
  }

  countProducts(): Promise<number> {
    return this.repository.count();
  }
}
