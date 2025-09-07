import { Router } from 'express';
import { ControllerFactory } from '../factories/controller.factory.js';

const routes = Router();

const messageController = ControllerFactory.createMessageController();

routes.post('/messages', messageController.createMessage);

export { routes };