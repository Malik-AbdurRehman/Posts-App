export default async function PostDetail({params}){
    const {id} = params

    const res =await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const obj = await res.json();
    console.log(obj);
    return(
        <div className="flex flex-col justify-center">
            <p className="text-center text-3xl m-5">Post Number: {obj.id}</p>
            <p className="text-center text-2xl m-3">Title: {obj.title}</p>
            <p className="text-center mt-10">Text: {obj.body}</p>  
        </div>
    )
}