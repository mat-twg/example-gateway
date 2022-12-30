import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type EntityDocument = HydratedDocument<Entity>;

@Schema({
  timestamps: true,
  versionKey: false,
  toJSON: {
    transform(doc, ret) {
      delete ret._id;
    },
  },
})
export class Entity {
  @ApiProperty({
    example: 'entityName',
  })
  @Prop({ index: true, unique: true })
  name: string;

  @ApiProperty({
    type: Object,
    example: [
      {
        paramName: 0.004,
      },
    ],
    isArray: true,
  })
  @Prop({ required: true })
  params: Record<string, number>[];

  @ApiProperty()
  @Prop()
  createdAt?: Date;

  @ApiProperty()
  @Prop()
  updatedAt?: Date;
}

export const EntitySchema = SchemaFactory.createForClass(Entity);
