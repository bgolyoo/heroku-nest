import { Test, TestingModule } from '@nestjs/testing';
import { PoniesController } from './ponies.controller';
import { PoniesService } from './ponies.service';

describe('PoniesController', () => {
  let controller: PoniesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PoniesController],
      providers: [PoniesService],
    }).compile();

    controller = module.get<PoniesController>(PoniesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
