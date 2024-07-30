import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './database';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [
    TerminusModule,
    TypeOrmModule.forRoot(databaseConfig),

    ProductModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
