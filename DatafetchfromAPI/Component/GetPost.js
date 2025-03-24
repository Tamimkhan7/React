import { useEffect, useReducer, useState } from "react";

export default function GetPost() {
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState({});
    const [error, setError] = useState('');


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(date => {
                // when my data has come into the function
                setLoading(false);
                setPost(data);
                setError('');
            })
            .catch(err => {
                setLoading(false);
                setPost({});
                setError('there was a problem!');
            })
    }, []);

    return (
        <div>
            {loading ? 'Loading....' : post.title}
            {error ? error : null}
        </div>
    );
}