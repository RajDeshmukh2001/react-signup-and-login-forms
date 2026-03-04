import type { JSX } from "react";
import CustomLink from "./CustomLink";

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
                status !== "CLOSED" &&
                <>
                    <span className="text-neutral-300">|</span>
                    <CustomLink href={`/tickets/${ticketId}/edit`} label="Update" />

                    {isAllowed("REASSIGN_TICKET") &&
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