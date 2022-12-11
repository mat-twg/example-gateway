import { Injectable } from '@nestjs/common';
import { WebsocketGateway } from '../gateway/websocket.gateway';

@Injectable()
export class BusinessService {
  constructor(private readonly gateway: WebsocketGateway) {}

  public sendToGateway(event: string, ...args: any[]) {
    this.gateway.emit(event, args);
  }
}
