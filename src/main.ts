import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Налаштування CORS за допомогою NestJS вбудованого методу
  app.enableCors({
    origin: 'http://localhost:3001', // Адреса вашого фронтенд додатку
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();
