import { Test, TestingModule } from '@nestjs/testing';
import { SelftnumberController } from './selftnumber.controller';

describe('SelftnumberController', () => {
  let controller: SelftnumberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SelftnumberController],
    }).compile();

    controller = module.get<SelftnumberController>(SelftnumberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
