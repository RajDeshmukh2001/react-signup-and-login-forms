import { Form, Formik } from "formik";
import InputField from "./InputField";
import Button from "./Button";
import { validateComment } from "../utils/validateTicket";
import type { JSX } from "react";

type AddCommentProps = {
    onSubmit: (
        values: { body: string }, 
        resetForm: () => void
    ) => Promise<void>;
};

const AddCommentForm = ({ onSubmit }: AddCommentProps): JSX.Element => {
    return (
        <div className="border-t border-neutral-200 py-4 space-y-4">
            <h1 className="font-semibold">Add Comment</h1>

            <Formik
                initialValues={{ body: "" }}
                validate={validateComment}
                onSubmit={(values, { resetForm }) => onSubmit(values, resetForm)}
            >
                {() => (
                    <Form className="flex flex-col gap-4">
                        <InputField label="" name="body" type="textarea" />
                        <div className="mt-2">
                            <Button label="Add Comment" type="submit" />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddCommentForm;