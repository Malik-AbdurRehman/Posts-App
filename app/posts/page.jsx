import Link from "next/link";
import axios from "axios";
export default async function Posts() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const posts= res.data;
  return (
   <>
    <h1 className="text-4xl text-center m-4 mt-8">Posts</h1>
    <div className="flex flex-row m-3 p-1 flex-wrap justify-center">
    {posts.map((post)=>(
      <Link href={`/posts/${post.id}`} key={post.id} >
        <div className="bg-gray-200 m-3 p-3 rounded-2xl max-w-2xs min-w-2xs min-h-25 shadow-2xs hover:shadow-2xl cursor-pointer"> 
          <p className="font-bold text-center">{post.title}</p>
        </div>
      </Link>
    ))}
    </div>
   </>
  );
}