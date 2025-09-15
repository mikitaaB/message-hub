import type { Request, Response, NextFunction } from 'express';
import { config } from '../config/environment.js';

export function corsHandler(req: Request, res: Response, next: NextFunction): void {
    const allowedOrigin = config.nodeEnv === 'production' ? config.allowedOrigin : '*';
    res.header('Access-Control-Allow-Origin', allowedOrigin);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
        return;
    }

    next();
}
