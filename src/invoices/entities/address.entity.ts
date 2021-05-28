import { ApiProperty } from '@nestjs/swagger';

export class Address {
  @ApiProperty()
  street: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  postCode: string;

  @ApiProperty()
  country: string;
}
