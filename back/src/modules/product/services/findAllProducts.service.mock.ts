import { Product } from '../infra/typeorm/entities/product..entity';

export const findAllProductsMock = [
  {
    code: 'D22-2077-006',
    name: 'Tênis Nike Revolution 7 Feminino - Preto+Branco',
    available: true,
    visible: true,
    description:
      'Carregamos o Revolution 7 com o tipo de amortecimento e suporte macio que pode mudar o seu mundo de corrida. Elegante como sempre, confortvel quando a borracha encontra a estrada e performtico para o ritmo desejado, uma evoluo de um favorito dos fs que oferece uma conduo macia e suave.',
    priceInCents: '39999',
    salePriceInCents: '30399',
    rating: 4.5,
    image:
      'https://static.netshoes.com.br/produtos/tenis-nike-revolution-7-feminino/26/JD8-6363-026/JD8-6363-026_zoom1.jpg?ts=1708096757?ims=544x',
    stockAvailable: true,
  },
] as Product[];

export const responseMock = {
  total: 1,
  pageSize: 10,
  totalPages: 1,
  products: findAllProductsMock,
};
