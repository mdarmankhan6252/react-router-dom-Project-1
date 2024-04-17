import { Link } from "react-router-dom";

const Comment = ({comment}) => {
    const {id, name, email, body} = comment;
    return (
        <div className="text-center border-2 border-green-500 rounded-xl flex flex-col bg-green-50">
            <div className="flex-grow">
            <h1 className="text-2xl font-semibold text-green-500">{id}</h1>
            <h3 className="text-xl font-semibold">{name}</h3>
            <h4 className="font-bold">{email}</h4>
            <p>{body}</p>
            </div>
            <Link to={`/comment/${id}`}><button className="text-2xl border-2 border-blue-500 my-3 px-10 bg-blue-50 rounded-full">See more</button></Link>
        </div>
    );
};

export default Comment;