export type SuccessResponse<T> = {
    success: boolean;
    message: string;
    data: T;
}