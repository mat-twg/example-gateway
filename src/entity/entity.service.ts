import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Entity, EntityDocument } from './entity.schema';
import { EntityDto } from './entity.dto';

@Injectable()
export class EntityService {
  constructor(
    @InjectModel(Entity.name) private entityModel: Model<EntityDocument>,
  ) {}

  async createOrUpdate(entityDto: EntityDto): Promise<Entity> {
    const model = await this.entityModel.findOneAndUpdate(
      { name: entityDto.name },
      { params: entityDto.params },
    );

    return model || new this.entityModel(entityDto).save();
  }

  async findAll(): Promise<Entity[]> {
    return this.entityModel.find().exec();
  }
}
