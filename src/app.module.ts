import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvoiceController } from './invoices/invoice/controllers/invoice.controller';
import { InvoiceService } from './invoices/services/invoice/invoice.service';

@Module({
  imports: [],
  controllers: [AppController, InvoiceController],
  providers: [AppService, InvoiceService],
})
export class AppModule {}
