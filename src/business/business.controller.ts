import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { BusinessService } from './business.service';
import { DATA_SOURCE_EVENT } from './constants';

@Controller()
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  @EventPattern(DATA_SOURCE_EVENT)
  public action(@Payload() data: string) {
    this.businessService.sendToGateway(DATA_SOURCE_EVENT, data);
  }
}
