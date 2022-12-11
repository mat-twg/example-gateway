import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BusinessModule } from './business/business.module';
import { WebsocketModule } from './gateway/websocket.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.local', '.env'],
      isGlobal: true,
    }),
    WebsocketModule,
    BusinessModule,
  ],
})
export class AppModule {}
