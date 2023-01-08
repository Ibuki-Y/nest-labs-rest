import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { ResponseTimeInterceptor } from './logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalInterceptors(new ResponseTimeInterceptor());
  app.enableCors({
    origin: ['http://localhost:3000'],
  });
  await app.listen(3001);
}
bootstrap();
