import { IsOptional, IsString, IsUUID } from 'class-validator';
import { UUID } from 'node:crypto';

export class UpdateCardDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id: UUID;

  @IsString()
  @IsOptional()
  readonly brand?: string;

  @IsString()
  @IsOptional()
  readonly model?: string;
}
