import type { CreateMessageRequest, MessageEntity } from '../types/message.types.js';
import type { IMessageService } from '../interfaces/service.interface.js';
import type { IMessageRepository } from '../interfaces/repository.interface.js';
import { RepositoryFactory } from '../factories/repository.factory.js';

export class MessageService implements IMessageService {
    constructor(private readonly repository: IMessageRepository = RepositoryFactory.createMessageRepository()) {}

    async processMessage(data: CreateMessageRequest): Promise<MessageEntity> {
        try {
            const normalizedData: CreateMessageRequest = {
                name: data.name.trim(),
                phone: data.phone.replace(/\s+/g, ''),
                message: data.message.trim()
            };

            return await this.repository.create(normalizedData);
        } catch (error) {
            throw new Error(`Failed to process message: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }
}