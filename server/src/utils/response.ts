import type { Response } from 'express';
import type { ValidationError, ApiResponse } from '../types/message.types.js';
import { HTTP_STATUS } from '../constants/index.js';

export class ResponseHandler {
    static success<T = undefined>(res: Response, message = 'OK', statusCode: number = HTTP_STATUS.ok, data?: T): void {
        const response: ApiResponse<T> = {
            success: true,
            message
        };

        if (data !== undefined) {
            response.data = data;
        }

        res.status(statusCode).json(response);
    }

    static created<T = undefined>(res: Response, message = 'Created', data?: T): void {
        this.success(res, message, HTTP_STATUS.created, data);
    }

    static validationError(res: Response, errors: ValidationError[]): void {
        const response: ApiResponse = {
            success: false,
            message: 'Validation failed',
            errors
        };
        res.status(HTTP_STATUS.badRequest).json(response);
    }

    static serverError(res: Response, message = 'Internal server error'): void {
        const response: ApiResponse = {
            success: false,
            message
        };
        res.status(HTTP_STATUS.internalServerError).json(response);
    }

    static notFound(res: Response, message: string): void {
        const response: ApiResponse = {
            success: false,
            message
        };
        res.status(HTTP_STATUS.notFound).json(response);
    }
}