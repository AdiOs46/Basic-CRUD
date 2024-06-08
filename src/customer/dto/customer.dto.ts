import { IsNotEmpty, IsString, IsDate, IsBoolean, IsArray, IsObject } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateCustomerDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsDate()
  birthdate: Date;

  @ApiProperty()
  @IsBoolean()
  active: boolean;

  @ApiProperty()
  @IsArray()
  accounts: string[];

  @ApiProperty()
  @IsObject()
  tier_and_details: Record<string, any>;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}

export class ReadCustomerDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsDate()
  birthdate: Date;
}

export class DeleteCustomerDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsDate()
  birthdate: Date;
}
