import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /**
   * Activation du CORS - Permet au frontend d'accéder à l'API depuis une autre origine.
   */
  app.enableCors();

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();