import type { Ticket } from "../types/ticket";

export const validateTicket = (values: Ticket): Partial<Ticket> => {
    const { title, description } = values;
    const errors: Partial<Ticket> = {};

    if (!title.trim()) {
        errors.title = "Title is required";
    } else if (title.trim().length < 3) {
        errors.title = "Title must be at least 3 characters";
    } else if (title.trim().length > 100) {
        errors.title = "Title must not exceed 100 characters";
    }

    if (!description) {
        errors.description = "Description is required";
    } else if (description.trim().length < 3) {
        errors.description = "Description must be at least 3 characters";
    } else if (description.trim().length > 1000) {
        errors.description = "Description must not exceed 1000 characters";
    }

    return errors;
}

export const validateComment = (values: { body: string }): { body?: string | undefined } => {
    const errors: { body?: string } = {};

    if (!values.body.trim()) {
        errors.body = "Comment is required";
    } else if (values.body.trim().length < 3) {
        errors.body = "Comment must be at least 3 characters";
    } else if (values.body.trim().length > 1000) {
        errors.body = "Comment must not exceed 1000 characters";
    }

    return errors;
}