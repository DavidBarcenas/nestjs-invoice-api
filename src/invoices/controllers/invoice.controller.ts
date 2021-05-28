import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import {
  CreateInvoiceDto,
  FilterInvoiceDto,
  UpdateInvoiceDto,
} from 'src/invoices/dto/invoice.dto';
import { InvoiceService } from 'src/invoices/services/invoice.service';
import { MongoIdPipe } from 'src/common/mongo-id.pipe';

@ApiTags('invoices')
@Controller('invoices')
export class InvoiceController {
  constructor(private invoiceService: InvoiceService) {}

  @ApiOperation({ summary: 'List of all invoices' })
  @Get()
  getAll(@Query() params: FilterInvoiceDto) {
    return this.invoiceService.findAll(params);
  }

  @ApiOperation({ summary: 'Get a single invoice' })
  @Get(':id')
  getOne(@Param('id', MongoIdPipe) id: string) {
    return this.invoiceService.findOne(id);
  }

  @ApiOperation({ summary: 'Create an invoice' })
  @Post()
  create(@Body() payload: CreateInvoiceDto) {
    return this.invoiceService.create(payload);
  }

  @ApiOperation({ summary: 'Update an invoice' })
  @Put(':id')
  update(
    @Param('id', MongoIdPipe) id: string,
    @Body() payload: UpdateInvoiceDto,
  ) {
    return this.invoiceService.update(id, payload);
  }

  @ApiOperation({ summary: 'Delete an invoice' })
  @Delete(':id')
  delete(@Param('id', MongoIdPipe) id: string) {
    return this.invoiceService.delete(id);
  }
}
