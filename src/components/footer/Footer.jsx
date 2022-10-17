import React from "react";
export default function Footer({problemNumber,setQuestion,handleResult,score,totalProblems})
{ 
	
   const handleNext=(e)=>
   {
     const nextValue=problemNumber+1;
	 setQuestion(nextValue);
   }
   const handlePrev=(e)=>
   {
     const prevValue=problemNumber-1;
	 setQuestion(prevValue);
   }
    return(
	<footer className="p-4 self-center w-screen static bottom-0 flex bg-[#0f172a] shadow md:flex md:items-evenly sm:justify-around md:justify-between md:p-6 dark:bg-gray-800">
	<span className="text-3xl font-bold text-lg text-cyan-100 sm:text-center dark:text-white">Question- {problemNumber+1}/5</span>
	<ul className="flex flex-wrap items-center mt-3 sm:mt-0">
	<li>
	{problemNumber<=0?<button className="drop-shadow-xl text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-sans focus:ring-blue-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 cursor-not-allowed" disabled>Previous</button>:<button className="drop-shadow-xl text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handlePrev}>Previous</button>}
	</li>
	<li>
     {problemNumber>=4?<button className="drop-shadow-xl text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" data-modal-toggle="small-modal" type="button" onClick={()=>handleResult(score,totalProblems)}>Submit</button>:<button className="drop-shadow-xl text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleNext}>Next</button>}	
	</li>
	</ul>
	</footer>
    );
}