import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Catalog } from '../entities/catalog.entity';

@Injectable()
export class CatalogsService {
  constructor(
    @InjectModel(Catalog.name) private catalogModel: Model<Catalog>,
  ) {}

  async findAll(): Promise<Catalog[]> {
    return await this.catalogModel.find().exec();
  }
}
