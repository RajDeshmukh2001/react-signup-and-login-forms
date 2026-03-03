import type { SuccessResponse } from "../types/api";
import type { User } from "../types/user";
import { axiosInstance } from "./axiosInstance";

const user = axiosInstance(import.meta.env.VITE_USER_URI);

export const getCurrentUser = async (): Promise<User> => {
    const resposne = await user.get<User>(`/me`);
    return resposne.data;
}

export const getAllSupportAgents = async (): Promise<SuccessResponse<User>> => {
    const resposne = await user.get<SuccessResponse<User>>(`?role=SUPPORT_AGENT`);
    return resposne.data;
}