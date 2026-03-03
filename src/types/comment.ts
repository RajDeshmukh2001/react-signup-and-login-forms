export type Comment = {
    id: string;
    comment: string;
    commenter: string;
    createdAt: string;
}

export type AddCommentResponse = Pick<Comment, "id" | "createdAt"> & {
    body: string;
}