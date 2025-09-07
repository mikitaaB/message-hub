import type { CreateMessageRequest, MessageEntity } from '../types/message.types.js';

export interface IMessageRepository {
    create(data: CreateMessageRequest): Promise<MessageEntity>;
}