import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateReportDto {
  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsString()
  @IsOptional()
  cvFile: string;

  @IsNumber()
  @IsOptional()
  contact: number;
}
