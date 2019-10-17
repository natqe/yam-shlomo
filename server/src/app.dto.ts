import { IsNotEmpty, IsString, IsOptional } from 'class-validator'

export class SendMailDto {

  @IsNotEmpty()
  @IsString()
  named: string

  @IsNotEmpty()
  @IsString()
  title: string

  @IsString()
  @IsOptional()
  content: string

}