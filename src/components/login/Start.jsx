import React from "react";
import {Link} from "react-router-dom";
export default function Start()
{
    return(
     <div className=" flex-col bg-[#0f172a] h-4/5 w-screen flex justify-evenly items-center">
     <div className="font-bold text-6xl text-white subpixel-antialiased ">
     Welcome to BrainBuzz Quiz App   
     </div>
      <Link to="/quiz" className="rounded-md border border-transparent mt-4/5  bg-indigo-600 px-20 py-4 text-base font-medium text-white hover:bg-indigo-700">
  Start Quiz
</Link>
      </div>  
    
    )
}
