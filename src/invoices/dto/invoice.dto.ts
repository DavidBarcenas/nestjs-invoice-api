import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

import { Address } from '../entities/address.entity';
import { Product } from '../entities/product.entity';

export class CreateInvoiceDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Invoice creation date' })
  readonly createdAt: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Invoice payment date' })
  readonly paymentDue: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Invoice description' })
  readonly description: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty({ description: 'Invoice payment terms in days' })
  readonly paymentTerms: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Name of the person to whom the invoice is made',
  })
  readonly clientName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Email of the person to whom the invoice is made',
  })
  readonly clientEmail: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Invoice status' })
  readonly status: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'Sender address' })
  readonly senderAddress: Address;

  @IsNotEmpty()
  @ApiProperty({ description: 'Customer address' })
  readonly clientAddress: Address;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ description: 'Products purchased' })
  readonly items: Product[];

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty({ description: 'Total price of products' })
  readonly total: number;
}

export class UpdateInvoiceDto extends PartialType(CreateInvoiceDto) {}

export class FilterInvoiceDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Filter invoices by status' })
  status: string;
}
