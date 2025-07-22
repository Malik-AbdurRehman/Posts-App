import Comments from "@/app/components/comments";
import axios from "axios";

export default async function PostDetail({params}){
    const {id} = await params

    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const obj = res.data;

    return(
        <div className="flex flex-col justify-center border-2 m-6 rounded-2xl p-24">
            <p className="text-center text-3xl m-5">Post # {obj.id}</p>
            <p className="text-center text-2xl m-3">Title: {obj.title}</p>
            <p className="text-center mt-10">Text: {obj.body}</p>
            <div className="mt-20">
                <Comments postId={id}/>
            </div>
            
        </div>
    )
}