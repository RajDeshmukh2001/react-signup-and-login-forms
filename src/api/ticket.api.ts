import axios from "axios";
import type { TicketType, UpdateTicketType } from "../types/ticket";
import { getAuthToken } from "../utils/authToken";

const baseURI: string = import.meta.env.VITE_TICKET_URI;

export const createTicket = async (values: TicketType) => {
    const token = getAuthToken();
    if (!token) {
        return null;
    }
    const response = await axios.post(`${baseURI}`, values, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return response.data;
}

export const getAllTickets = async () => {
    const token = getAuthToken();
    if (!token) {
        return null;
    }

    const response = await axios.get(`${baseURI}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return response.data;
}

export const getTicketById = async (id: string | undefined) => {
    const token = getAuthToken();
    if (!token) {
        return null;
    }

    const response = await axios.get(`${baseURI}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return response.data;    
}

export const getCommentsByTicketId = async (id: string | undefined) => {
    const token = getAuthToken();
    if (!token) {
        return null;
    }

    const response = await axios.get(`${baseURI}/${id}/comments`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return response.data; 
}

export const updateTicket = async (id: string | undefined, values: UpdateTicketType) => {
    const token = getAuthToken();
    if (!token) {
        return null;
    }
    const { description, status } = values
    const payload: UpdateTicketType = {};

    if (values.description?.trim() !== "") {
        payload.description = description;
    }

    if (status?.includes("CLOSED")) {
        payload.status = status[0];
    }

    if (Object.keys(payload).length === 0) return;

    const response = await axios.patch(`${baseURI}/${id}`, payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return response.data;
}