import { Module } from '@nestjs/common';
import { PoniesService } from './ponies.service';
import { PoniesController } from './ponies.controller';

@Module({
  controllers: [PoniesController],
  providers: [PoniesService]
})
export class PoniesModule {}
