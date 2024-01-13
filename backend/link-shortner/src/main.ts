import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

//https://www.docker.com/blog/how-to-build-and-deploy-a-url-shortener-using-typescript-and-nest-js/