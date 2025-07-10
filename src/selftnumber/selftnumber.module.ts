import { Module } from '@nestjs/common';
import { SelftnumberController } from './selftnumber.controller';
import { SelftnumberService } from './selftnumber.service';

@Module({
  controllers: [SelftnumberController],
  providers: [SelftnumberService]
})
export class SelftnumberModule {}
