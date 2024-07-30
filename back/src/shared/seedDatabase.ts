import { getConnection } from 'src/database';
import { Table } from 'typeorm';
import fs from 'fs';

export async function seedDatabase() {
  const database = await getConnection();

  const queryRunner = database.createQueryRunner();
  const productsTable = new Table({
    name: 'products',
    columns: [
      { name: 'code', type: 'varchar(255)', isUnique: true, isPrimary: true },
      { name: 'name', type: 'varchar(255)' },
      { name: 'available', type: 'TINYINT' },
      { name: 'visible', type: 'TINYINT' },
      { name: 'description', type: 'text' },
      { name: 'priceInCents', type: 'varchar(255)' },
      { name: 'salePriceInCents', type: 'varchar(255)' },
      { name: 'rating', type: 'float' },
      { name: 'image', type: 'text' },
      { name: 'stockAvailable', type: 'TINYINT' },
    ],
  });
  await queryRunner.createTable(productsTable, true);

  const { products } = JSON.parse(
    fs.readFileSync('./src/shared/mock-products.json', 'utf-8'),
  );

  for (const product of products) {
    const productObject = {
      ...product,
      description: product.details.description,
    };
    delete productObject.details;

    await queryRunner.manager.upsert('products', productObject, {
      conflictPaths: ['code'],
    });
  }
}
