import { TicketStatus } from "../constants/ticket.const";
import type { SuccessResponse } from "../types/api";
import type { AddCommentResponse, Comment } from "../types/comment";
import type { TicketAssignment, Ticket, UpdateTicketPayload } from "../types/ticket";
import { axiosInstance } from "./axiosInstance";

const ticket = axiosInstance(import.meta.env.VITE_TICKET_URI);

export const createTicket = async (values: Ticket): Promise<SuccessResponse<Ticket>> => {
    const response = await ticket.post<SuccessResponse<Ticket>>(``, values);
    return response.data;
}

export const getAllTickets = async (): Promise<SuccessResponse<Ticket[]>> => {
    const response = await ticket.get<SuccessResponse<Ticket[]>>(``);
    return response.data;
}

export const getTicketById = async (id: string | undefined): Promise<SuccessResponse<Ticket>> => {
    const response = await ticket.get<SuccessResponse<Ticket>>(`/${id}`);
    return response.data;
}

export const getCommentsByTicketId = async (id: string | undefined): Promise<SuccessResponse<Comment[]>> => {
    const response = await ticket.get<SuccessResponse<Comment[]>>(`/${id}/comments`);
    return response.data;
}

export const updateTicket = async (id: string | undefined, values: UpdateTicketPayload): Promise<SuccessResponse<Ticket> | undefined> => {
    const { description, status, priority } = values
    const payload: UpdateTicketPayload = {};

    if (values.description?.trim() !== "") {
        payload.description = description;
    }

    if (Array.isArray(status) && status?.includes(TicketStatus.CLOSED)) {
        payload.status = status[0];
    } else if (typeof status === "string" && status.trim() !== "") {
        payload.status = status;
    }

    if (priority?.trim() !== "") {
        payload.priority = priority;
    }

    if (Object.keys(payload).length === 0) {
        throw new Error("Nothing to update");
    };

    const response = await ticket.patch<SuccessResponse<Ticket>>(`/${id}`, payload);
    return response.data;
}

export const addComment = async (id: string | undefined, body: string): Promise<SuccessResponse<AddCommentResponse>> => {
    const response = await ticket.post<SuccessResponse<AddCommentResponse>>(`/${id}/comments`, { body });
    return response.data;
}

export const assignTicket = async (
    id: string | undefined, 
    assignedByUserId: string | undefined, 
    assignedToUserId: string
): Promise<SuccessResponse<TicketAssignment>> => {
    const response = await ticket.post<SuccessResponse<TicketAssignment>>(`/${id}/assign`, { assignedByUserId, assignedToUserId });
    return response.data;
}