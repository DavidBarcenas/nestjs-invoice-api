import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('invoices')
export class InvoiceController {
  @Get()
  findAll() {
    return 'findAll works!';
  }

  @Get('/:invoiceId')
  findOne(@Param('invoiceId') invoiceId: string) {
    return 'findOne works!';
  }

  @Post()
  create() {
    return 'create works!';
  }

  @Put()
  update() {
    return 'update works!';
  }

  @Delete('/:invoiceId')
  delete(@Param('invoiceId') invoiceId: string) {
    return 'delete works!';
  }
}
