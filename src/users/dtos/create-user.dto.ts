import { IsEmail, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsEmail()
  @ApiProperty({ example: 'contact@santoshb.com.np' })
  email: string;

  @IsString()
  @ApiProperty({ minLength: 8, example: 'Secret@123' })
  password: string;
}
