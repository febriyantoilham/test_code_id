import { Controller, Post, Query } from '@nestjs/common';
import { SelftnumberService } from './selftnumber.service';

@Controller('selftnumber')
export class SelftnumberController {
  constructor(private readonly service: SelftnumberService) {}

  @Post('searchSelfNumbers')
  public searchSelfNumbers(@Query('limit') limit: number) {
    return this.service.searchSelfNumbers(limit);
  }
}
