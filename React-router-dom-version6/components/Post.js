import { useParams } from "react-router-dom";
// Parameters, often referred to as params, are dynamic parts of the URL that can change and are set to a specific value when a particular route is matched. 

export default function Post() {
    const params = useParams();

    return (
        <div>
            <h1>Post</h1>
            <p>Post Id is {params.postId}</p>
        </div>
    )
}