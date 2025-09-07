import type { Request, Response, NextFunction } from 'express';
import { config } from '../config/environment.js';
import { ResponseHandler } from '../utils/response.js';
import { ERROR_MESSAGES } from '../constants/index.js';

export function errorHandler(
    error: Error,
    _req: Request,
    res: Response,
    next: NextFunction
): void {
    if (res.headersSent) {
        return next(error);
    }

    const message = config.isDevelopment ? error.message : ERROR_MESSAGES.internalError;
    ResponseHandler.serverError(res, message);
}

export function notFoundHandler(req: Request, res: Response): void {
    ResponseHandler.notFound(res, `${ERROR_MESSAGES.routeNotFound}: ${req.method} ${req.path}`);
}