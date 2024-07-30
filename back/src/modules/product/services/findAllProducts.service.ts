import { Injectable, Inject } from '@nestjs/common';
import { ProductRepository } from '../infra/typeorm/repository/product.repository';
import { FindAllProductsDTO } from '../dto/FindAllProducts.dto';
import type { IProductRepository } from '../infra/typeorm/repository/interfaces/product-repository.interface';

@Injectable()
export class FindAllProductsService {
  constructor(
    @Inject(ProductRepository)
    private readonly productRepository: IProductRepository,
  ) {}

  async exec(pageSize: number, page: number): Promise<FindAllProductsDTO> {
    const products = await this.productRepository.findAll(pageSize, page);
    const count = await this.productRepository.countProducts();

    return new FindAllProductsDTO({
      total: count,
      totalPages: Math.ceil(count / pageSize),
      pageSize,
      products,
    });
  }
}
