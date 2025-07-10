import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SelftnumberModule } from './selftnumber/selftnumber.module';

@Module({
  imports: [SelftnumberModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
