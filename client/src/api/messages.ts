import { request } from './request';

export interface MessageData {
    name: string;
    phone: string;
    message: string;
}

export interface MessageResponse {
    id: string;
    name: string;
    phone: string;
    message: string;
    createdAt: string;
}

export const sendMessageAPI = async (data: MessageData) => {
    const response = await request<MessageResponse>({
        url: '/api/messages',
        method: 'POST',
        data,
    });
    return response.data;
};
