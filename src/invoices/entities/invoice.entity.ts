import { ApiProperty } from '@nestjs/swagger';
import { Address } from './address.entity';
import { Product } from './product.entity';

export class Invoice {
  @ApiProperty()
  id: string;

  @ApiProperty()
  createdAt: string;

  @ApiProperty()
  paymentDue: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  paymentTerms: number;

  @ApiProperty()
  clientName: string;

  @ApiProperty()
  clientEmail: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  senderAddress: Address;

  @ApiProperty()
  clientAddress: Address;

  @ApiProperty()
  items: Product[];

  @ApiProperty()
  total: number;
}
