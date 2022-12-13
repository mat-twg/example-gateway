import { Module } from '@nestjs/common';
import { EntityController } from './entity.controller';
import { EntityService } from './entity.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Entity, EntitySchema } from './entity.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Entity.name, schema: EntitySchema }]),
  ],
  controllers: [EntityController],
  providers: [EntityService],
  exports: [EntityService],
})
export class EntityModule {}
