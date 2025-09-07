import { PrismaMessageRepository } from '../repositories/message.repository.js';

export class RepositoryFactory {
    static createMessageRepository(): PrismaMessageRepository {
        return new PrismaMessageRepository();
    }
}