"use client"
import axios from "axios";
import { useEffect, useState } from "react";

export default function Comments({postId}){
    
    const [showComments,setShowComments]=useState(false);    

    const [addCommentButton,setAddButton]=useState(false);

    const [commentInput,setCommentInput]=useState("");

    const handleAddCommentButton=()=>{
        setAddButton(!addCommentButton);
    }
    const handleShowComment=()=>{
        setShowComments(!showComments);
    }

    const handleCommentInput=(e)=>{
        setCommentInput(e.target.value);
    }

    const handlePostComment = async()=>{
        try{
            const res= await axios.post("https://jsonplaceholder.typicode.com/comments",{
            postId :postId,
            id:501,
            name : "dummyUser",
            email : "AR@gmail.com",
            body : commentInput
        });
        console.log("Response From API",res.data);
        setAddButton("")
        }
        catch(err) {
            console.error(err);
        }
    };

    const [comments,setComments]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(res=> setComments(res.data))
        .catch(error=>console.error(error))
    },[])
    const filtered = comments.filter((comment)=>comment.postId === Number(postId));
    return(
        <>
            <div className="flex flex-col justify-center">
                <button type="button" onClick={handleAddCommentButton} className="bg-gray-900 text-amber-50 p-4 rounded-2xl hover:shadow-2xl cursor-pointer max-w-max mx-auto m-2">Add Comment</button>
                {addCommentButton &&
                    <div className="mx-auto flex text-center">
                        <textarea className="bg-gray-300 m-5 p-3 rounded-xl" onChange={handleCommentInput} value={commentInput}></textarea>
                        <button onClick={handlePostComment} className="bg-gray-900 text-amber-50 p-4 rounded-2xl hover:shadow-2xl cursor-pointer mt-6 mb-6">Post</button>
                    </div>
                }
                <button type="button" onClick={handleShowComment} className="bg-gray-900 text-amber-50 p-4 rounded-2xl hover:shadow-2xl cursor-pointer max-w-max mx-auto m-2">{showComments ? "Hide Comments": "View Comments"}</button>
                {showComments &&
                filtered.map((comment)=>(
                    <div key={comment.id} className=" flex flex-col p-3 m-5 bg-gray-300 rounded-2xl min-w-min">
                        <p className="font-bold">{comment.name}</p>
                        <p>{comment.body}</p>
                    </div>
                ))
            }
            </div>
        </>
    )
}