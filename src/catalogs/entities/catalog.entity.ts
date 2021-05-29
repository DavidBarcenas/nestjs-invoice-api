import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

class Terms {
  id: number;
  name: string;
}

@Schema()
export class Catalog extends Document {
  @ApiProperty()
  status: string[];

  @ApiProperty()
  paymentTerms: Terms[];
}

export const CatalogSchema = SchemaFactory.createForClass(Catalog);
