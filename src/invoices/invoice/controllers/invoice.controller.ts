import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { InvoiceService } from 'src/invoices/services/invoice/invoice.service';

@Controller('invoices')
export class InvoiceController {
  constructor(private invoiceService: InvoiceService) {}

  @Get()
  findAll() {
    return this.invoiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.invoiceService.findOne(id);
  }

  @Post()
  create(@Body() payload: any) {
    return this.invoiceService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    return this.invoiceService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.invoiceService.delete(id);
  }
}
