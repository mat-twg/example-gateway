import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { clc } from '@nestjs/common/utils/cli-colors.util';
import { ZmqSubServer } from './zmq';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.API_PORT || 3000;

  const config = new DocumentBuilder()
    .setTitle('Example API')
    .setDescription('Description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);

  app.connectMicroservice({
    strategy: new ZmqSubServer({
      address: process.env.ZMQ_ADDRESS,
      curve: {
        serverKey: process.env.ZMQ_CURVE_SERVER_KEY,
      },
    }),
  });

  await app.startAllMicroservices();

  await app.listen(3000, () =>
    Logger.log(
      clc.cyanBright(`Server started on port: ${port}`),
      'NestApplication',
    ),
  );
}

(async () => await bootstrap())();
