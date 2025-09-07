import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { config } from './config/environment.js';
import { errorHandler, notFoundHandler } from './middleware/error.middleware.js';
import { corsHandler } from './middleware/cors.middleware.js';
import { routes } from './routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.resolve(__dirname, '../../.env');
const dotenvResult = dotenv.config({ path: envPath });
dotenvExpand.expand(dotenvResult);

const app = express();

app.use(corsHandler);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}`);
});

process.on('SIGTERM', () => process.exit(0));
process.on('SIGINT', () => process.exit(0));