import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema  } from 'mongoose';

export type CustomerDocument = Customer & Document;

@Schema({ timestamps: true })
export class Customer {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  address: string;

  @Prop()
  birthdate: Date;

  @Prop()
  active: boolean;

  @Prop([String])
  accounts: string[];

  @Prop({ type: MongooseSchema.Types.Mixed })
  tier_and_details: Record<string, any>;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
