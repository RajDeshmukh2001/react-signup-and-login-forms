import { useEffect, useState, type JSX } from "react";
import { getAllTickets } from "../api/ticket.api";
import type { Ticket } from "../types/ticket";
import useIsAllowed from "../hooks/useIsAllowed";
import TicketActions from "../components/TicketActions";
import { Table, TableBody, TableCell, TableEmpty, TableHead, TableHeader, TableRow } from "../components/Table";


const Tickets = (): JSX.Element => {
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const isAllowed = useIsAllowed();

    const tableHeaders: string[] = [
        "Title",
        "Status",
        isAllowed("VIEW_OWN_TICKETS") ? "Support Agent" : "Priority",
        "Created At",
        "Actions",
    ]

    useEffect(() => {
        const fetchTickets = async (): Promise<void> => {
            const data = await getAllTickets();
            setTickets(data.data);
        };

        fetchTickets();
    }, []);

    return (
        <div className="w-full flex flex-col items-center justify-center gap-4 p-4 md:p-20">
            <h1 className="text-xl sm:text-2xl font-extrabold">Tickets</h1>

            {/* {tickets?.length === 0 &&
                <tr>
                    <td colSpan={6} className="py-10 text-center text-neutral-400">
                        No tickets found
                    </td>
                </tr>
            } */}

            <Table>
                <TableHeader>
                    <TableRow>
                        {tableHeaders.map((header) => (
                            <TableHead key={header}>{header}</TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tickets.map((ticket) => (
                        <TableRow key={ticket.id}>
                            <TableCell className="font-medium">{ticket.title}</TableCell>
                            <TableCell>{ticket.status}</TableCell>
                            <TableCell>
                                {isAllowed("VIEW_OWN_TICKETS") && ticket?.agentName}
                                {isAllowed("VIEW_ASSIGNED_TICKETS") && ticket?.priority}
                            </TableCell>
                            <TableCell>{ticket?.createdAt ? new Date(ticket.createdAt).toLocaleDateString() : "-"}</TableCell>
                            <TableCell>
                                <TicketActions
                                    ticketId={ticket?.id}
                                    status={ticket?.status}
                                />
                            </TableCell>
                        </TableRow>
                    ))}

                    {tickets.length === 0 &&
                        <TableEmpty colSpan={tableHeaders.length} message="No tickets found" />
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default Tickets;