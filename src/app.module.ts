import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PoniesModule } from './ponies/ponies.module';

@Module({
  imports: [PoniesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
