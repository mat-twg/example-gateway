import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { EntityService } from './entity.service';
import { Entity } from './entity.schema';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Entity')
@Controller('entity')
export class EntityController {
  constructor(private readonly entityService: EntityService) {}

  @ApiResponse({
    status: 200,
    type: Entity,
    isArray: true,
  })
  @Get('list')
  async getEntityList(): Promise<Entity[]> {
    return this.entityService.findAll();
  }

  @ApiOkResponse({ type: Entity })
  @ApiNotFoundResponse()
  @Get(':name')
  async getEntity(@Param('name') name: string): Promise<Entity> {
    const entity = await this.entityService.findByName(name);
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}
