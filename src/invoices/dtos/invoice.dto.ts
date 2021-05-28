import { PartialType } from '@nestjs/mapped-types';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';

import { Address } from '../entities/address.entity';
import { Product } from '../entities/product.entity';

export class CreateInvoiceDto {
  @IsString()
  @IsNotEmpty()
  readonly createdAt: string;

  @IsString()
  @IsNotEmpty()
  readonly paymentDue: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly paymentTerms: number;

  @IsString()
  @IsNotEmpty()
  readonly clientName: string;

  @IsString()
  @IsNotEmpty()
  readonly clientEmail: string;

  @IsString()
  @IsNotEmpty()
  readonly status: string;

  @IsNotEmpty()
  readonly senderAddress: Address;

  @IsNotEmpty()
  readonly clientAddress: Address;

  @IsArray()
  @IsNotEmpty()
  readonly items: Product[];

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly total: number;
}

export class UpdateInvoiceDto extends PartialType(CreateInvoiceDto) {}
