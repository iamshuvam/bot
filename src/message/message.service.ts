//import { Injectable } from '@nestjs/common';
//import { PuppeteerWebBaseLoader } from 'langchain/document_loaders/web/puppeteer';
//import * as puppeteer from 'puppeteer';
//import * as redis from 'redis';

// @Injectable()
// export class MessageService {
//   async loadAndTrain(webpageUrl: string): Promise<void> {
//     try {
//       const loader = new PuppeteerWebBaseLoader("https://en.wikipedia.org/wiki/Google#Early_years");
//       const docs = await loader.load();
//       console.log(docs);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }
// }


// message.service.ts
import { Injectable } from '@nestjs/common';
import { PuppeteerWebBaseLoader } from 'langchain/document_loaders/web/puppeteer';
import { PineconeService } from 'src/pinecone/pinecone.service';


@Injectable()
export class MessageService {
  constructor(private readonly pineconeService: PineconeService) {}

  async loadAndTrain(webpageUrl: string): Promise<void> {
    try {
      const loader = new PuppeteerWebBaseLoader(webpageUrl);
      const docs = await loader.load();
      console.log(docs);

      // Extract relevant information from docs
      const extractedData = this.extractDataFromDocs(docs);

      // Prepare data for Pinecone (convert to vector format)
      const vectors = this.prepareVectorsFromData(extractedData);

      // Upsert vectors into Pinecone index
      await this.pineconeService.upsertDocumentToPinecone('document_id', vectors);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      // Close Pinecone connection
      await this.pineconeService.closeConnection();
    }
  }

  // Replace these methods with your actual logic
  private extractDataFromDocs(docs: any): any {
    // Implement logic to extract relevant data from docs
    return {};
  }

  private prepareVectorsFromData(data: any): number[] {
    // Implement logic to convert data to vectors
    return [0.1, 0.2, 0.3]; // Replace with actual vector values
  }
}
