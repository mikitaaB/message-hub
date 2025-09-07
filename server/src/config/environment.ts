export const config = {
    port: parseInt(process.env['API_PORT'] || '3000', 10),
    nodeEnv: process.env['NODE_ENV'] || 'development',
    apiBaseUrl: process.env['VITE_API_BASE_URL'] || 'http://localhost:3000',
    isDevelopment: process.env['NODE_ENV'] === 'development',
    databaseUrl: process.env['DATABASE_URL'] || 'postgresql://postgres:postgres@localhost:5432/message_hub_db?schema=public',
} as const;