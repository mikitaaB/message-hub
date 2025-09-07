import { PrismaClient } from '@prisma/client';

let prismaInstance: PrismaClient | null = null;

export function getPrismaClient(): PrismaClient {
    prismaInstance ??= new PrismaClient();
    return prismaInstance;
}

export async function initializeDatabase(): Promise<void> {
    const prisma = getPrismaClient();
    await prisma.$connect();
}