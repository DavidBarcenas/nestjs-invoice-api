import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { environments } from './environments';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvoiceController } from './controllers/invoice.controller';
import { InvoiceService } from './services/invoice.service';
import { DatabaseModule } from './database/database.module';
import { MongoClient } from 'mongodb';

const uri = `mongodb://${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/?readPreference=primary`;
const client = new MongoClient(uri);

async function run() {
  await client.connect();
  const database = client.db(process.env.DATABASE_NAME);
  const invoiceCollection = database.collection(
    process.env.DATABASE_INVOICE_COLLECTION,
  );
  const invoices = await invoiceCollection.find().toArray();
}

run();

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
