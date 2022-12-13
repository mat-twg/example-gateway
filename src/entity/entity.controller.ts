import { Controller, Get } from '@nestjs/common';
import { EntityDto } from './entity.dto';
import { EntityService } from './entity.service';
import { Entity } from './entity.schema';

@Controller('/entity')
export class EntityController {
  constructor(private readonly entityService: EntityService) {}

  @Get('/list')
  async getEntityList(): Promise<Entity[]> {
    return await this.entityService.findAll();
  }

  @Get('/:id')
  getEntity(): EntityDto {
    return new EntityDto();
  }
}
