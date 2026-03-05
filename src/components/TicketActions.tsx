import type { JSX } from "react";
import { Link } from "react-router-dom";
import { TicketPermission, TicketStatus } from "../constants/ticket.const";
import { Paths } from "../constants/routes.const";

type TicketActionsPropsType = {
    ticketId: string | undefined;
    status: string | undefined;
    isAllowed: (permissions: string) => boolean;
}

const TicketActions = ({ ticketId, status, isAllowed }: TicketActionsPropsType): JSX.Element => {
    return (
        <div className="space-x-2">
            <Link to={Paths.TICKET_DETAILS(ticketId)} className="text-sky-800 hover:text-sky-500">View</Link>
            {
                status !== TicketStatus.CLOSED &&
                <>
                    <span className="text-neutral-300">|</span>
                    <Link to={Paths.TICKET_EDIT(ticketId)} className="text-sky-800 hover:text-sky-500">Update</Link>

                    {isAllowed(TicketPermission.REASSIGN_TICKET) &&
                        <>
                            <span className="text-neutral-300">|</span>
                            <Link to={Paths.TICKET_ASSIGN(ticketId)}  className="text-sky-800 hover:text-sky-500">Assign</Link>
                        </>
                    }
                </>
            }
        </div>
    )
}

export default TicketActions;