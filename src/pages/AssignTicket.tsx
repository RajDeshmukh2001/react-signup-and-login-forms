import { Form, Formik } from "formik";
import Button from "../components/Button";
import { useEffect, useState, type JSX } from "react";
import type { User } from "../types/user";
import { getAllSupportAgents } from "../api/user.api";
import SelectField from "../components/SelectField";
import { assignTicket } from "../api/ticket.api";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import useUser from "../hooks/useUser";
import axios from "axios";
import type { Option } from "../types/option";

type AssignTicketType = {
    assignedToUserId: string;
}

const initialValues: AssignTicketType = {
    assignedToUserId: "",
}

const AssignTicket = (): JSX.Element => {
    const { id } = useParams();
    const { user } = useUser();
    const navigate = useNavigate();
    const [agentOptions, setAgentOptions] = useState<Option[]>([]); 

    useEffect(() => {
        const fetchAllSupportAgents = async (): Promise<void> => {
            const data = await getAllSupportAgents();
            const options: Option[] = data.data
            .filter((agent: User) => agent.id !== user?.id)
            .map((agent: User) => ({
                value: agent.id,
                label: agent.name,
            }));
            setAgentOptions(options);
        };

        fetchAllSupportAgents();
    }, [user?.id]);

    const handleSubmit = async (values: AssignTicketType): Promise<void> => {
        try {
            const data = await assignTicket(id, user?.id, values?.assignedToUserId);
            if (data.success) {
                toast.success(data.message);
                navigate("/tickets");
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data?.message);
            }
        }
    }

    return (
        <section className="w-full flex items-center justify-center mt-20 p-4">
            <div className="w-full p-8 max-w-md bg-white rounded-2xl border border-neutral-200 space-y-6">
                <h1 className="text-xl sm:text-2xl text-center font-extrabold">Assign Ticket</h1>

                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                >
                    {() => (
                        <Form className="flex flex-col gap-4">
                            <SelectField
                                label="Select Support Agent"
                                name="assignedToUserId"
                                options={agentOptions}
                            />

                            <div className="mt-2">
                                <Button
                                    label="Assign Ticket"
                                    type="submit"
                                />
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    )
}

export default AssignTicket;