import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { FindAllProductsService } from './findAllProducts.service';

import { Product } from '../infra/typeorm/entities/product..entity';

import {
  findAllProductsMock,
  responseMock,
} from './findAllProducts.service.mock';
import { IProductRepository } from '../infra/typeorm/repository/interfaces/product-repository.interface';
import { ProductRepository } from '../infra/typeorm/repository/product.repository';

describe('FindAllProductsService', () => {
  let findAllProductsService: FindAllProductsService;
  let productRepository: IProductRepository;
  let repository: Repository<Product>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        FindAllProductsService,
        ProductRepository,
        {
          provide: getRepositoryToken(Product),
          useClass: Repository,
        },
      ],
    }).compile();

    findAllProductsService = module.get<FindAllProductsService>(
      FindAllProductsService,
    );
    productRepository = module.get<IProductRepository>(ProductRepository);
    repository = module.get<Repository<Product>>(getRepositoryToken(Product));
  });

  it('should be defined', () => {
    expect(findAllProductsService).toBeDefined();
    expect(productRepository).toBeDefined();
    expect(repository).toBeDefined();
  });

  it('should return all products', async () => {
    jest
      .spyOn(productRepository, 'findAll')
      .mockResolvedValue(findAllProductsMock);
    jest
      .spyOn(productRepository, 'countProducts')
      .mockResolvedValue(findAllProductsMock.length);

    const result = await findAllProductsService.exec(10, 1);

    expect(result).toEqual(responseMock);
  });
});
