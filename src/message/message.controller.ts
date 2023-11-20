import { Controller, Get, Post, Body} from '@nestjs/common';
import { MessageService } from './message.service';
//import { PuppeteerWebBaseLoader } from 'langchain/document_loaders/web/puppeteer';


@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  // @Post('/web-loader')
  // async trainBot(@Body() body: { webpageUrl: string }): Promise<string> {
  //   const result = await this.messageService.trainBot(body.webpageUrl);
  //   return result;
  // }


  @Post('web-loader')
  async loadWebpage(@Body() body: { webpageUrl: string }): Promise<any> {
    try {
      const { webpageUrl } = body;
      await this.messageService.loadAndTrain(webpageUrl);
      return { success: true, message: 'Webpage loaded and bot trained successfully.' };
    } catch (error) {
      console.error('Error:', error);
      return { success: false, message: 'Internal server error.' };
    }
  }

  @Get()
  findAll() {
    return 'shuvam';
  }



  
}
