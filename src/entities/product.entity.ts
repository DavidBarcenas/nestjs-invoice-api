import { ApiProperty } from '@nestjs/swagger';

export class Product {
  @ApiProperty()
  name: string;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  price: number;

  @ApiProperty()
  total: number;
}
