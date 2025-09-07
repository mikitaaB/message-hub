import { MessageService } from '../services/message.service.js';
import { RepositoryFactory } from './repository.factory.js';

export class ServiceFactory {
    static createMessageService(): MessageService {
        const repository = RepositoryFactory.createMessageRepository();
        return new MessageService(repository);
    }
}