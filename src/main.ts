import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { ResponseTimeInterceptor } from './logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalInterceptors(new ResponseTimeInterceptor());
  app.enableCors({
    origin: ['http://localhost:3000'],
  });
  const port = Number(process.env.PORT) || 3001;
  await app.listen(port, '0.0.0.0');
}
bootstrap();
