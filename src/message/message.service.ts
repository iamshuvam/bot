import { Injectable } from '@nestjs/common';
//import { PuppeteerWebBaseLoader } from 'langchain/document_loaders/web/puppeteer';
import * as puppeteer from 'puppeteer';
//import * as redis from 'redis';

@Injectable()
export class MessageService {
  async loadAndTrain(webpageUrl: string): Promise<void> {
    try {
      const browser = await puppeteer.launch();
      //console.log(browser);
      
      const page = await browser.newPage();
      //console.log(page);
      
      await page.goto(webpageUrl);
      const content = await page.content();
      console.log(content);
      
      await browser.close();

      
    } catch (error) {
      console.error('Error:', error);
    }
  }
}
