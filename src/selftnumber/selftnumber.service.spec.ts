import { Test, TestingModule } from '@nestjs/testing';
import { SelftnumberService } from './selftnumber.service';

describe('SelftnumberService', () => {
  let service: SelftnumberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SelftnumberService],
    }).compile();

    service = module.get<SelftnumberService>(SelftnumberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
