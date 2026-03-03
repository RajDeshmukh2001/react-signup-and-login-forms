export type User = {
    id: string;
    name: string;
    email: string;
    role: "CUSTOMER" | "SUPPORT_AGENT";
    permissions?: string[]; 
}

export type SupportAgent = Pick<User, "id" | "name">