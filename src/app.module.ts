import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import * as Joi from 'joi';

import { environments } from './environments';
import { InvoicesModule } from './invoices/invoices.module';
import { CatalogsModule } from './catalogs/catalogs.module';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      isGlobal: true,
      load: [config],
      validationSchema: Joi.object({
        MONGO_DB: Joi.string().required(),
        MONGO_HOST: Joi.string().required(),
        MONGO_PORT: Joi.string().required(),
        MONGO_CONNECTION: Joi.string().required(),
      }),
    }),
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigType<typeof config>) => {
        const { connection, host, dbName, user, password } =
          configService.mongo;
        return {
          uri: `${connection}://${host}`,
          dbName,
          user,
          pass: password,
        };
      },
      inject: [config.KEY],
    }),
    InvoicesModule,
    CatalogsModule,
  ],
})
export class AppModule {}
