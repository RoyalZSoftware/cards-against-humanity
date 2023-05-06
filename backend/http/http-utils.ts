export interface HttpRequest {
    method: 'POST' | 'GET';
    data?: any;
    headers: Record<string, string>;
}