import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageModule } from './message/message.module';
import { PineconeService } from './pinecone/pinecone.service';

@Module({
  imports: [MessageModule],
  controllers: [AppController],
  providers: [AppService, PineconeService],
})
export class AppModule {}
