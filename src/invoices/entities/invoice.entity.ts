import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Address } from './address.entity';
import { Product } from './product.entity';

@Schema()
export class Invoice extends Document {
  @ApiProperty()
  @Prop({ required: true, type: String })
  paymentDue: string;

  @ApiProperty()
  @Prop({ required: true, type: String })
  description: string;

  @ApiProperty()
  @Prop({ required: true, type: Number })
  paymentTerms: number;

  @ApiProperty()
  @Prop({ required: true, type: String })
  clientName: string;

  @ApiProperty()
  @Prop({ required: true, type: String })
  clientEmail: string;

  @ApiProperty()
  @Prop({ required: true, type: String })
  status: string;

  @ApiProperty()
  senderAddress: Address;

  @ApiProperty()
  @Prop({ required: true })
  clientAddress: Address;

  @ApiProperty()
  @Prop({ required: true })
  items: Product[];

  @ApiProperty()
  @Prop({ required: true, type: Number })
  total: number;

  @ApiProperty()
  @Prop({ required: true, type: String })
  createdAt: string;

  @Prop({ type: String })
  updatedAt: string;
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);
