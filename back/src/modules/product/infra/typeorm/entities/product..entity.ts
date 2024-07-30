import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryColumn({
    name: 'code',
    type: 'varchar',
  })
  code: string;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'available', type: 'tinyint' })
  available: boolean;

  @Column({ name: 'visible', type: 'tinyint' })
  visible: boolean;

  @Column({ name: 'description', type: 'text' })
  description: string;

  @Column({ name: 'priceInCents', type: 'varchar' })
  priceInCents: string;

  @Column({ name: 'salePriceInCents', type: 'varchar' })
  salePriceInCents: string;

  @Column({ name: 'rating', type: 'float' })
  rating: number;

  @Column({ name: 'image', type: 'text' })
  image: string;

  @Column({ name: 'stockAvailable', type: 'tinyint' })
  stockAvailable: boolean;
}
