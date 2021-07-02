import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsObject,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';

export class CreateOrderDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class KafkaCreateOrderDto {
  @Type(() => CreateOrderDto)
  @ValidateNested()
  @IsNotEmpty()
  value: CreateOrderDto;
}
