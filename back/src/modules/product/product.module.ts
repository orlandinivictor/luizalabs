import { Global, Module } from '@nestjs/common';
import { FindAllProductsService } from './services/findAllProducts.service';
import { ProductRepository } from './infra/typeorm/repository/product.repository';
import { ProductController } from './infra/controller/product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './infra/typeorm/entities/product..entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [FindAllProductsService, ProductRepository],
})
export class ProductModule {}
