import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import {
  CreateInvoiceDto,
  FilterInvoiceDto,
  UpdateInvoiceDto,
} from 'src/invoices/dto/invoice.dto';
import { Invoice } from 'src/invoices/entities/invoice.entity';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectModel(Invoice.name) private invoiceModel: Model<Invoice>,
  ) {}

  async findAll(params?: FilterInvoiceDto): Promise<Invoice[]> {
    const filters: FilterQuery<Invoice> = {};
    if (params && params.status) {
      filters.status = params.status;
    }
    return await this.invoiceModel.find(filters).exec();
  }

  async findOne(id: string): Promise<Invoice> {
    const invoice = await this.invoiceModel.findById(id).exec();
    if (!invoice) {
      throw new NotFoundException(`The invoice with id #${id} was not found.`);
    }
    return invoice;
  }

  async create(payload: CreateInvoiceDto): Promise<Invoice> {
    const newInvoice: Invoice = new this.invoiceModel(payload);
    return await newInvoice.save();
  }

  async update(id: string, payload: UpdateInvoiceDto): Promise<Invoice> {
    const invoice: Invoice = await this.invoiceModel
      .findByIdAndUpdate(id, { $set: payload }, { new: true })
      .exec();
    if (!invoice) {
      throw new NotFoundException(`The invoice with id #${id} was not found.`);
    }
    return invoice;
  }

  async delete(id: string): Promise<boolean> {
    const invoice: Invoice = await this.invoiceModel.findByIdAndDelete(id);
    if (!invoice) {
      throw new NotFoundException(`The invoice with id #${id} was not found.`);
    }
    return true;
  }
}
