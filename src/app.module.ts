import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { environments } from './environments';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvoiceController } from './invoices/controllers/invoice.controller';
import { InvoiceService } from './invoices/services/invoice/invoice.service';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      isGlobal: true,
    }),
  ],
  controllers: [AppController, InvoiceController],
  providers: [AppService, InvoiceService],
})
export class AppModule {}
