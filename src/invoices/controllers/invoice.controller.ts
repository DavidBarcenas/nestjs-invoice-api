import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import {
  CreateInvoiceDto,
  UpdateInvoiceDto,
} from 'src/invoices/dtos/invoice.dto';
import { InvoiceService } from 'src/invoices/services/invoice/invoice.service';

@ApiTags('invoices')
@Controller('invoices')
export class InvoiceController {
  constructor(private invoiceService: InvoiceService) {}

  @ApiOperation({ summary: 'List of all invoices' })
  @Get()
  get() {
    return this.invoiceService.findAll();
  }

  @ApiOperation({ summary: 'Get a single invoice' })
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.invoiceService.findOne(id);
  }

  @ApiOperation({ summary: 'Create an invoice' })
  @Post()
  create(@Body() payload: CreateInvoiceDto) {
    return this.invoiceService.create(payload);
  }

  @ApiOperation({ summary: 'Update an invoice' })
  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateInvoiceDto) {
    return this.invoiceService.update(id, payload);
  }

  @ApiOperation({ summary: 'Delete an invoice' })
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.invoiceService.delete(id);
  }
}
