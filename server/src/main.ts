import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://react-password-generator-umber.vercel.app',
  })
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3001);
}
bootstrap();


