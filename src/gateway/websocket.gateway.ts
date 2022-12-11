import {
  WebSocketGateway,
  OnGatewayConnection,
  WebSocketServer,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway()
export class WebsocketGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  private readonly logger = new Logger(this.constructor.name);

  @WebSocketServer()
  private readonly server: Server;

  public emit(event: string, ...args: any[]): boolean {
    return this.server.emit(event, args);
  }

  public handleConnection(client: Socket): any {
    this.logger.log(`Client id: ${client.id} connected`);
  }

  public handleDisconnect(client: Socket): any {
    this.logger.log(`Client id: ${client.id} disconnected`);
  }
}
