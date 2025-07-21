"use client"
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex justify-center m-6 font-bold text-4xl">
      Welcome to my Post Next.js App
    </div>
    <div className="flex justify-center items-center min-h-screen">
        <Link href="./posts" className="bg-gray-900 text-amber-50 p-4 rounded-2xl hover:shadow-2xl cursor-pointer">Click here to View All Posts</Link>
    </div>
   </>
  );
}
