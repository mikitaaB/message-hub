import type { CreateMessageRequest, MessageEntity } from '../types/message.types.js';
import type { IMessageRepository } from '../interfaces/repository.interface.js';
import { getPrismaClient } from '../lib/database.js';

export class PrismaMessageRepository implements IMessageRepository {
    async create(data: CreateMessageRequest): Promise<MessageEntity> {
        try {
            const prisma = getPrismaClient();
            return await prisma.message.create({
                data: {
                    name: data.name,
                    phone: data.phone,
                    message: data.message
                }
            });
        } catch (error) {
            throw new Error(`Database operation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }
}