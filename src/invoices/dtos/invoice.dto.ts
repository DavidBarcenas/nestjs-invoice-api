import { Address } from '../entities/address.entity';
import { Product } from '../entities/product.entity';

export class CreateInvoiceDto {
  readonly createdAt: string;
  readonly paymentDue: string;
  readonly description: string;
  readonly paymentTerms: number;
  readonly clientName: string;
  readonly clientEmail: string;
  readonly status: string;
  readonly senderAddress: Address;
  readonly clientAddress: Address;
  readonly items: Product[];
  readonly total: number;
}

export class UpdateInvoiceDto {
  readonly createdAt?: string;
  readonly paymentDue?: string;
  readonly description?: string;
  readonly paymentTerms?: number;
  readonly clientName?: string;
  readonly clientEmail?: string;
  readonly status?: string;
  readonly senderAddress?: Address;
  readonly clientAddress?: Address;
  readonly items?: Product[];
  readonly total?: number;
}
