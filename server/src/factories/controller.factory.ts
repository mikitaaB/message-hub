import { MessageController } from '../controllers/message.controller.js';
import { MessageValidator } from '../utils/validation.js';
import { ServiceFactory } from './service.factory.js';

export class ControllerFactory {
    static createMessageController(): MessageController {
        const validator = new MessageValidator();
        const service = ServiceFactory.createMessageService();
        return new MessageController(validator, service);
    }
}