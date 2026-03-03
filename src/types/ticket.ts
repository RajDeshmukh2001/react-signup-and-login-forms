export type Ticket = {
    id?: string;
    title: string;
    description: string;
    status?: string;
    priority?: string;
    agentName?: string;
    createdAt?: Date;
}

export type UpdateTicket = Partial<Pick<Ticket, "description" | "status" | "priority">>

export type TicketAssignment = {
    id: string;
    ticketId: string;
    assignedToUserId: string;
    assignedByUserId: string;
}