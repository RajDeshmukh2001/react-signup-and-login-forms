import type { User } from "./user";

export type SignupRequest = Pick<User, "name" | "email"> & {
    password: string;
    confirmPassword: string;
}

export type LoginRequest = Pick<User, "email"> & {
    password: string;
}

export type SignupResponse = Omit<User, "role" | "permissions">

export type LoginResponse = Omit<User, "name" | "permissions"> & {
    token: string;
}