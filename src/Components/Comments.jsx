import { useLoaderData } from "react-router-dom";
import Comment from "./Comment";

const Comments = () => {
    const comments = useLoaderData();
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
            }
        </div>

    );
};

export default Comments;