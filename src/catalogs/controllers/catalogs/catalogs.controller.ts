import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CatalogsService } from 'src/catalogs/services/catalogs.service';

@ApiTags('catalogs')
@Controller('catalogs')
export class CatalogsController {
  constructor(private catalogService: CatalogsService) {}

  @ApiOperation({ summary: 'Option catalogs to fill the selection fields' })
  @Get()
  getAll() {
    return this.catalogService.findAll();
  }
}
