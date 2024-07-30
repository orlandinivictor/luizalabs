import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getConnection } from './database';
import { seedDatabase } from './shared/seedDatabase';
import { setupSwagger } from './config/swagger';

async function bootstrap() {
  await getConnection();
  await seedDatabase();

  const app = await NestFactory.create(AppModule);
  setupSwagger(app);
  app.enableCors();

  await app.listen(3333);
}
bootstrap();
