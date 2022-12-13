import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EntityDocument = HydratedDocument<Entity>;

@Schema({ timestamps: true, versionKey: false })
export class Entity {
  @Prop({ index: true, unique: true })
  name: string;

  @Prop({ required: true })
  params: Record<string, number>[];

  @Prop()
  createdAt?: Date;

  @Prop()
  updatedAt?: Date;
}

export const EntitySchema = SchemaFactory.createForClass(Entity);
