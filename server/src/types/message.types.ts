export interface CreateMessageRequest {
    name: string;
    phone: string;
    message: string;
}

export interface ValidationError {
    field: string;
    message: string;
}

export interface ApiResponse<T = unknown> {
    success: boolean;
    message: string;
    data?: T;
    errors?: ValidationError[];
}

export interface MessageEntity {
    id: string;
    name: string;
    phone: string;
    message: string;
    createdAt: Date;
    updatedAt: Date;
}