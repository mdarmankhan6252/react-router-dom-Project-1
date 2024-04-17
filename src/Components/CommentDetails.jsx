import { Link, useLoaderData, useNavigate } from "react-router-dom";

const CommentDetails = () => {
    const commentDetails = useLoaderData();
    const {id, name, email, body} = commentDetails;

    const navigate = useNavigate();
    const handleGoBack = () =>{
        navigate(-1)
    }
    return (
        <div className="text-center my-10 border-2 border-green-500 bg-green-50 p-6 rounded-xl max-w-2xl mx-auto">
            <h1 className="text-2xl text-green-500">{id}</h1>
            <h3 className="text-2xl font-semibold">{name}</h3>
            <h4 className="font-bold ">{email}</h4>
            <p>{body}</p>
            <Link onClick={handleGoBack}><button className="px-8 my-3 bg-green-500 text-white py-1 rounded-lg">Go back</button></Link>
        </div>
    );
};

export default CommentDetails;