import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Activer CORS pour permettre les requêtes du frontend
  app.enableCors();

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();