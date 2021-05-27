import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvoiceController } from './invoices/invoice/invoice.controller';

@Module({
  imports: [],
  controllers: [AppController, InvoiceController],
  providers: [AppService],
})
export class AppModule {}
