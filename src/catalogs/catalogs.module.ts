import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CatalogsController } from './controllers/catalogs/catalogs.controller';
import { Catalog, CatalogSchema } from './entities/catalog.entity';
import { CatalogsService } from './services/catalogs.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Catalog.name, schema: CatalogSchema }]),
  ],
  providers: [CatalogsService],
  controllers: [CatalogsController],
})
export class CatalogsModule {}
