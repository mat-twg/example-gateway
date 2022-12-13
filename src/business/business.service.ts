import { Injectable, Logger } from '@nestjs/common';
import { WebsocketGateway } from '../gateway/websocket.gateway';
import { EntityService } from '../entity/entity.service';

@Injectable()
export class BusinessService {
  private readonly logger = new Logger(this.constructor.name);

  constructor(
    private readonly gateway: WebsocketGateway,
    private readonly entityService: EntityService,
  ) {}

  public sendToGateway(event: string, data: string): void {
    this.entityService
      .createOrUpdate(JSON.parse(data))
      .catch((err: Error) => this.logger.error(err.message));
    this.gateway.emit(event, data);
  }
}
