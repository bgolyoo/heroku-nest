import { PartialType } from '@nestjs/mapped-types';
import { CreatePonyDto } from './create-pony.dto';

export class UpdatePonyDto extends PartialType(CreatePonyDto) {}
