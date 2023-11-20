// // import { Injectable } from '@nestjs/common';

// // @Injectable()
// // export class PineconeService {}


// // pinecone.service.ts
// import { Injectable } from '@nestjs/common';
// import * as pinecone from 'pinecone-client';

// @Injectable()
// export class PineconeService {
//   private readonly apiKey = 'd5e6c0e3-2414-4ff7-8d18-6c4a4e627c0e';
//   private readonly environment = 'gcp-starter';
//   private readonly indexName = 'test'; // Choose a suitable index name

//   constructor() {
//     pinecone.init({ apiKey: this.apiKey, environment: this.environment });
//     pinecone.createIndex(this.indexName);
//   }

//   async upsertDocumentToPinecone(documentId: string, vectors: number[]): Promise<void> {
//     await pinecone.index(this.indexName).upsert({ ids: [documentId], vectors });
//   }

//   async closeConnection(): Promise<void> {
//     pinecone.deinit();
//   }
// }


import { Pinecone } from "@pinecone-database/pinecone";      

const pinecone = new Pinecone();      
pinecone.init({      
	environment: "gcp-starter",      
	apiKey: "",      
});      
const index = pinecone.Index("test");