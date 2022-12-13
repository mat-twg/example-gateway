import { Module } from '@nestjs/common';
import { BusinessController } from './business.controller';
import { BusinessService } from './business.service';
import { WebsocketModule } from '../gateway/websocket.module';
import { EntityModule } from '../entity/entity.module';

@Module({
  imports: [WebsocketModule, EntityModule],
  controllers: [BusinessController],
  providers: [BusinessService],
})
export class BusinessModule {}
