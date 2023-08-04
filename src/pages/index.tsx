import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { error } from "console";
import Card  from "../components/Card"
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";

interface Course {
  id: string,
  desc: string,
  title: string
}
const Home: NextPage = () => {

  const [text, setText] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [courses, setCourses] = useState<Course[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [postsPerPage, setPostsPerPage] = useState<number>(4)
  const [lastQuery, setLastQuery] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleClick = async () => {
    if (text.trim() == "") { toast.error("Must have atleast one word", {duration: 2500}); return;}
    if (loading) { toast.error("Please wait until your request has finished loading", {duration: 2500}); return;}
    if (lastQuery.trim() == text.trim()) {return;}
    setLoading(true)
    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
    },
      body: JSON.stringify({ query: text })
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_LAMBDA_API_URL}/api/search`, request)
      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.detail)
      }
      setCourses(await res.json())

    }
    catch (err : any) {
      toast.error(err.message, {duration: 2500})
    }
    setLastQuery(text)
    setLoading(false)
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentCourses = courses.slice(firstPostIndex, lastPostIndex)
  
  return (
    <div className="mx-auto max-w-xl">
      <h1 className="mt-8 md:mt-14 flex justify-center text-center text-2xl md:text-3xl font-semibold">Effortlessly discover UCI courses using natural language 💬</h1>
      <div className="bg-neutral-200 rounded-lg p-2 mt-6 ring-1 ring-neutral-600 flex">
        <input onChange={handleChange} onKeyUp={handleKeyPress} className="text-black bg-neutral-200 sm:text-xl px-2 w-full outline-none" placeholder="Ex. Marginalized communities in the US" maxLength={100}></input>
        <button onClick={handleClick} className="hover:scale-110 px-1 transition ease-in-out">
          <MagnifyingGlassIcon className="h-8 w-8 m-1 text-neutral-700"></MagnifyingGlassIcon>
        </button>
      </div>

      <h1 className="text-center mt-10 text-xl font-semibold">Recommended Courses 📚</h1>
      <div className="bg-neutral-200 h-[545px] mt-2 rounded-lg ring-1 ring-neutral-600 p-3 space-y-4 items-center">
        {
          loading == false && courses.length == 0 ? <div className="w-full h-full mx-auto flex justify-center items-center text-neutral-600 text-center">Search something to get recommendations!</div> : <></>
        }
       
        { loading ? <Loader></Loader> :
          currentCourses.map((course, index) => {
            return <Card key={course.id} id={course.id} title={course.title} desc={course.desc}/>
          })
        }
      </div>
      <Pagination totalPosts={courses.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </div>
  );
};

export default Home;
