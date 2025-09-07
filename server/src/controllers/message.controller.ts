import type { Request, Response } from 'express';
import type { CreateMessageRequest } from '../types/message.types.js';
import type { IValidator, IMessageService } from '../interfaces/service.interface.js';
import { MessageValidator } from '../utils/validation.js';

export class MessageController {
    constructor(
        private readonly validator: IValidator = new MessageValidator(),
        private readonly messageService: IMessageService
    ) { }

    createMessage = async (req: Request, res: Response): Promise<void> => {
        try {
            const validationErrors = this.validator.validate(req.body);

            if (validationErrors.length > 0) {
                res.status(400).json({
                    success: false,
                    message: 'Validation failed',
                    errors: validationErrors
                });
                return;
            }

            const messageData = req.body as CreateMessageRequest;
            const result = await this.messageService.processMessage(messageData);

            res.status(201).json({
                id: result.id,
                name: result.name,
                phone: result.phone,
                message: result.message
            });
        } catch {
            res.status(500).json({
                success: false,
                message: 'Internal server error'
            });
        }
    };
}