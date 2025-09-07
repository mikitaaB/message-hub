const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

interface RequestOptions {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    data?: unknown;
    headers?: Record<string, string>;
}

interface ApiResponse<T = unknown> {
    data: T;
}

export const request = async <T = unknown>(options: RequestOptions): Promise<ApiResponse<T>> => {
    const { url, method, data, headers = {} } = options;

    const config: RequestInit = {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
    };

    if (data && ['POST', 'PUT'].includes(method)) {
        config.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(`${API_BASE_URL}${url}`, config);

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const responseData = await response.json();

        return {
            data: responseData
        };
    } catch (error) {
        console.error(`API request failed for ${url}:`, error);
        throw error;
    }
};