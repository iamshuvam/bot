import { MessageService } from './message.service';
export declare class MessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
    loadWebpage(body: {
        webpageUrl: string;
    }): Promise<any>;
    findAll(): string;
}
