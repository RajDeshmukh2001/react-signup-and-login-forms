import axios, { type AxiosInstance } from "axios";
import { getAuthToken } from "../utils/authToken";

export const axiosInstance = (baseURL: string): AxiosInstance => {
    const instance = axios.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    instance.interceptors.request.use((config) => {
        const token = getAuthToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });
    
    return instance;
};