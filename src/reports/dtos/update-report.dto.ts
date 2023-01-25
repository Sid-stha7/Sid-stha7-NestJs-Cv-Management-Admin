import {
  IsEmail,
  IsString,
  IsOptional,
  IsBoolean,
  IsNumber,
} from 'class-validator';

export class UpdateReportDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsNumber()
  @IsOptional()
  contact: number;

  @IsBoolean()
  @IsOptional()
  bookmark: boolean;

  @IsString()
  @IsOptional()
  cvFile: string;
}
