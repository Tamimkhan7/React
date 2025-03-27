import { useParams } from "react-router-dom";

export default function About() {
    const [category, topic] = useParams();
    
    return (
        <div>
            <div>This is the posts page - {category} / {topic}</div>
        </div>
    );
}
