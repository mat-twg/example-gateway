import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BusinessModule } from './business/business.module';
import { WebsocketModule } from './gateway/websocket.module';
import { EntityModule } from './entity/entity.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.local', '.env'],
      isGlobal: true,
    }),
    MongooseModule.forRoot('mongodb://root:password@172.16.101.2'),
    WebsocketModule,
    BusinessModule,
    EntityModule,
  ],
})
export class AppModule {}
