import { AnimatePresence, motion } from "framer-motion";
import { useReducer, CSSProperties } from "react";

import { GlobeAltIcon, ChevronRightIcon } from "@heroicons/react/24/outline";


interface Props {
  totalPosts: number;
  postsPerPage: number;
  setCurrentPage: any;
  currentPage: any;
  
}

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }: Props) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
    pages.push(i)
  }
  return (
    <div className="flex justify-center mt-2">
      {
        pages.map((page, index)=> {
          return <button className={`text-xl p-2 mx-1 rounded-lg text-neutral-400 ${page == currentPage ? "font-bold text-white" : ""}`} key={index} onClick={()=>setCurrentPage(page)}>{page}</button>
        })
      }
    </div>
  )
  
};

export default Pagination;