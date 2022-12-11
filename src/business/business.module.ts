import { Module } from '@nestjs/common';
import { BusinessController } from './business.controller';
import { BusinessService } from './business.service';
import { WebsocketModule } from '../gateway/websocket.module';

@Module({
  imports: [WebsocketModule],
  controllers: [BusinessController],
  providers: [BusinessService],
})
export class BusinessModule {}
