import { useCallback, useEffect, useState, type JSX } from "react"
import { useParams } from "react-router-dom";
import type { Ticket } from "../types/ticket";
import useIsAllowed from "../hooks/useIsAllowed";
import { addComment, getCommentsByTicketId, getTicketById, updateTicket } from "../api/ticket.api";
import toast from "react-hot-toast";
import axios from "axios";
import ViewTicket from "../components/ViewTicket";
import Comments from "../components/Comments";
import AddCommentForm from "../components/AddCommentForm";
import type { Comment } from "../types/comment";
import Button from "../components/Button";
import { TicketPermission, TicketStatus } from "../constants/ticket.const";

const TicketDetails = (): JSX.Element => {
    const { id } = useParams();
    const [ticket, setTicket] = useState<Ticket | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);
    const isAllowed = useIsAllowed();

    const fetchComments = useCallback(async (): Promise<void> => {
        const data = await getCommentsByTicketId(id);
        setComments(data.data);
    }, [id]);

    useEffect(() => {
        const fetchTicketDetails = async (): Promise<void> => {
            const ticketData = await getTicketById(id);
            setTicket(ticketData.data);
            await fetchComments();
        };

        fetchTicketDetails();
    }, [id, fetchComments]);


    const handleAddComment = async (values: { body: string }, resetForm: () => void): Promise<void> => {
        try {
            const data = await addComment(id, values.body);
            if (data.success) {
                toast.success(data.message);
                await fetchComments();
                resetForm();
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data?.message);
            }
        }
    }

    const handleCloseTicket = async (): Promise<void> => {
        try {
            const data = await updateTicket(id, { status: TicketStatus.CLOSED });
            if (data?.success) {
                toast.success(data.message);
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data?.message);
            }
        }
    }

    return (
        <div className="w-full flex flex-col justify-center gap-4 px-4 py-10 md:p-20">
            {isAllowed(TicketPermission.CLOSE_TICKET) &&
                <Button
                    type="button"
                    label="Close Ticket"
                    className="w-fit self-end"
                    onClick={handleCloseTicket}
                />
            }

            <div className="w-full border border-neutral-200 p-6 rounded-2xl space-y-4 md:space-y-6">
                <ViewTicket ticket={ticket} isAllowed={isAllowed} />
                {ticket?.status !== TicketStatus.CLOSED && <AddCommentForm onSubmit={handleAddComment} />}
                <Comments comments={comments} />
            </div>
        </div>
    )
}

export default TicketDetails;