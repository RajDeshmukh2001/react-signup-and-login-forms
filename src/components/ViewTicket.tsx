import type { Ticket } from "../types/ticket";
import type { JSX } from "react";

type ViewTicketProps = {
    ticket: Ticket | null;
    isAllowed: (permission: string) => boolean;
};

const ViewTicket = ({ ticket, isAllowed }: ViewTicketProps): JSX.Element => {
    return (
        <div className="space-y-2">
            <h2><span className="font-semibold">Title: </span>{ticket?.title}</h2>
            <h2><span className="font-semibold">Description: </span>{ticket?.description}</h2>
            <h2><span className="font-semibold">Status: </span>{ticket?.status}</h2>
            <h2>
                {isAllowed("VIEW_OWN_TICKETS") &&
                    <><span className="font-semibold">Support Agent: </span>{ticket?.agentName}</>
                }
                {isAllowed("VIEW_ASSIGNED_TICKETS") &&
                    <><span className="font-semibold">Priority: </span>{ticket?.priority}</>
                }
            </h2>
            <h2>
                <span className="font-semibold">Created On: </span>
                {ticket?.createdAt ? new Date(ticket.createdAt).toLocaleDateString() : "-"}
            </h2>
        </div>
    );
};

export default ViewTicket;