export const Paths = {
    HOME: "/",
    LOGIN: "/login",
    SIGNUP: "/signup",
    TICKETS: "/tickets",
    TICKET_CREATE: "/tickets/create",
    TICKET_DETAILS: (id: string | undefined) => `/tickets/${id}`,
    TICKET_EDIT: (id: string | undefined) => `/tickets/${id}/edit`,
    TICKET_ASSIGN: (id: string | undefined) => `/tickets/${id}/assign`,
    COMMENT: (id: string | undefined) => `tickets/${id}/comments`,
} as const;