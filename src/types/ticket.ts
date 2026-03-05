import type { TicketPermission, TicketPriority, TicketStatus } from "../constants/ticket.const";

export type Ticket = {
    id?: string;
    title: string;
    description: string;
    status?: string;
    priority?: string;
    agentName?: string;
    createdAt?: Date;
}

export type UpdateTicketPayload = Partial<Pick<Ticket, "description" | "status" | "priority">>

export type TicketAssignment = {
    id: string;
    ticketId: string;
    assignedToUserId: string;
    assignedByUserId: string;
}

export type TicketStatus = typeof TicketStatus[keyof typeof TicketStatus];

export type TicketPriority = typeof TicketPriority[keyof typeof TicketPriority];

export type TicketPermission = typeof TicketPermission[keyof typeof TicketPermission];