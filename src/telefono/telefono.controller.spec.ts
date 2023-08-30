import { Test, TestingModule } from '@nestjs/testing';
import { TelefonoController } from './telefono.controller';
import { TelefonoService } from './telefono.service';

describe('TelefonoController', () => {
  let controller: TelefonoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TelefonoController],
      providers: [TelefonoService],
    }).compile();

    controller = module.get<TelefonoController>(TelefonoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
