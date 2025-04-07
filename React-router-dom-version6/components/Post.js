
// useNavigate use kore history ber kore newoyar jonno from react-router-dom
import { useParams, useNavigate } from "react-router-dom";
// Parameters, often referred to as params, are dynamic parts of the URL that can change and are set to a specific value when a particular route is matched. 

export default function Post() {
    const params = useParams();
    const navi = useNavigate();

    function Goback() {
        // console.log("test");//for testing purpose
        // amra jokhn akta kore new post id te gelam tokhn abar back koror jonno jei address gula thake oi gula stack hoye jay, aita solve korar jonno we can use just replace 
        //    just finding previous page as like posts page
        // navi("/posts", {
        //     replace: true,
        // });//tahole ami akhn posts page a cole jabo
        // jodi ami ak page picone jete cai tahole just oi nav ke -1 diye call korle ak page picone cole jabe, othoba 2 page back a nite caile -2 diye call korle cole jabe
        navi(-1);//ak page picone cole jabe
    }

    return (
        <div>
            <h1>Post</h1>
            <p>Post Id is {params.postId}</p>
            <button type="button" onClick={Goback}>Go to posts</button>
        </div>
    )
}