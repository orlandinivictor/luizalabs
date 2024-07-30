interface Product {}

interface IFindAllProdutsResponse {
  total: number;
  pageSize: number;
  totalPages: number;
  products: Product[];
}

export class FindAllProductsDTO {
  total: number;
  pageSize: number;
  totalPages: number;
  products: Product[];

  constructor(responseParams: IFindAllProdutsResponse) {
    this.total = responseParams.total;
    this.pageSize = responseParams.pageSize;
    this.totalPages = responseParams.totalPages;
    this.products = responseParams.products;
  }
}
