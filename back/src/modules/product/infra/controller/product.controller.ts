import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FindAllProductsService } from '../../services/findAllProducts.service';

@Controller({
  path: 'product',
  version: '1',
})
@ApiTags('Products')
export class ProductController {
  constructor(
    private readonly findAllProductsService: FindAllProductsService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Search for all registered products.' })
  @ApiOkResponse({ description: 'Found products.' })
  findAll(
    @Query('pageSize')
    rawPageSize: number,
    @Query('page')
    rawPage: number,
  ) {
    const pageSize = Number(rawPageSize);
    const page = Number(rawPage);

    return this.findAllProductsService.exec(pageSize, page);
  }
}
