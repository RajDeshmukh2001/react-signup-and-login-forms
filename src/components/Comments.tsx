import type { Comment } from "../types/comment";
import type { JSX } from "react";

type CommentsProps = {
    comments: Comment[];
};

const Comments = ({ comments }: CommentsProps): JSX.Element => {
    return (
        <div className="border-t border-neutral-200 pt-4 space-y-4">
            <h1 className="font-semibold">Comments ({comments.length})</h1>

            <div className="space-y-6 h-56 overflow-y-scroll">
                {comments.map((comment) => (
                    <div key={comment.id}>
                        <div className="flex items-center gap-4 text-sm text-neutral-400">
                            <h5>{comment.commenter}</h5>
                            <h5>{comment.createdAt ? new Date(comment.createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) : "-"}</h5>
                        </div>
                        <p className="text-sm sm:text-base">{comment.comment}</p>
                    </div>
                ))}
            </div>

            {comments.length === 0 &&
                <p className="text-neutral-400">No Comments</p>
            }
        </div>
    );
};

export default Comments;