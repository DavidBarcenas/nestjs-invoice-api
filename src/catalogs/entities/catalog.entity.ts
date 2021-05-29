import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

class Status {
  paid: string;
  pending: string;
  draft: string;
}

@Schema()
export class Catalog extends Document {
  @ApiProperty()
  status: Status;

  @ApiProperty()
  paymentTerms: string[];
}

export const CatalogSchema = SchemaFactory.createForClass(Catalog);
