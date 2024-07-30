import { DataSource, DataSourceOptions } from 'typeorm';

export const databaseConfig = {
  type: 'sqlite',
  database: './src/database/database.sqlite',
  entities: ['./dist/**/*.entity{.ts,.js}'],
} as DataSourceOptions;

const dataSource = new DataSource(databaseConfig);

export async function getConnection() {
  if (!dataSource.isInitialized) await dataSource.initialize();

  return dataSource;
}
