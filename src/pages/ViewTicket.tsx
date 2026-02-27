import { useEffect, useState } from "react";
import type { TicketType } from "../types/ticket";
import { getTicketById } from "../api/ticket.api";
import { useParams } from "react-router-dom";

const ViewTicket = () => {
    const { id } = useParams();
    const [ticket, setTicket] = useState<TicketType | null>();

    useEffect(() => {
        const fetchTicket = async () => {
            const data = await getTicketById(id);
            setTicket(data.data);
        };

        fetchTicket();
    }, [id]);

    return (
        <div className="w-full flex justify-center p-20">
            <div className="w-full border border-neutral-200 p-6 rounded-2xl space-y-2">
                <h2 className="sm:text-lg"><span className="font-semibold">Title: </span>{ticket?.title}</h2>
                <h2 className="sm:text-lg"><span className="font-semibold">Description: </span>{ticket?.description}</h2>
                <h2 className="sm:text-lg"><span className="font-semibold">Status: </span>{ticket?.status}</h2>
                <h2 className="sm:text-lg"><span className="font-semibold">Support Agent: </span>{ticket?.agentName}</h2>
                <h2 className="sm:text-lg"><span className="font-semibold">Created On: </span>{ticket?.createdAt ? new Date(ticket.createdAt).toLocaleDateString() : "-"}</h2>
            </div>
        </div>
    )
}

export default ViewTicket;