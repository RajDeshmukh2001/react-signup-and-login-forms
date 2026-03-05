import type { JSX } from "react";
import CustomLink from "./CustomLink";
import { TicketPermission, TicketStatus } from "../constants/ticket.const";

type TicketActionsPropsType = {
    ticketId: string | undefined;
    status: string | undefined;
    isAllowed: (permissions: string) => boolean;
}

const TicketActions = ({ ticketId, status, isAllowed }: TicketActionsPropsType): JSX.Element => {
    return (
        <div className="space-x-2">
            <CustomLink href={`/tickets/${ticketId}`} label="View" />
            {
                status !== TicketStatus.CLOSED &&
                <>
                    <span className="text-neutral-300">|</span>
                    <CustomLink href={`/tickets/${ticketId}/edit`} label="Update" />

                    {isAllowed(TicketPermission.REASSIGN_TICKET) &&
                        <>
                            <span className="text-neutral-300">|</span>
                            <CustomLink href={`/tickets/${ticketId}/assign`} label="Assign" />
                        </>
                    }
                </>
            }
        </div>
    )
}

export default TicketActions;