import axios from "axios";
import type { LoginRequest, LoginResponse, SignupRequest, SignupResponse } from "../types/auth";
import type { SuccessResponse } from "../types/api";

const baseURI: string = import.meta.env.VITE_AUTH_URI;

export const userSignup = async (values: SignupRequest): Promise<SuccessResponse<SignupResponse>> => {
    const response = await axios.post(`${baseURI}/register`, values);
    return response.data;
}

export const userLogin = async (values: LoginRequest): Promise<SuccessResponse<LoginResponse>> => {
    const response = await axios.post(`${baseURI}/login`, values);
    return response.data;
}