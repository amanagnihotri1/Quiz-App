import React,{useState} from "react";
export default function Quiz({qinfo,setScore,attempted,setAttempted})
{ 
  const handleSubmit=(ifCorrect,numb)=>
  {
    if(ifCorrect===true)
    {
      setScore((prevValue)=>prevValue+1);
    } 
  }
  return(
  <div className="bg-[#0f172a] self-center h-80 w-9/12 shadow-lg rounded-lg max-w-screen-lg flex flex-wrap h-3/5 mx-auto md:justify-center sm:justify-center">
  <div className="questionSide basis-1/2 px-0 py-10 text-start">
  <h1 className="text-white text-xl font-bold">Question-<span className="font-semibold">{qinfo.numb}</span></h1>  
  <p className="questiondesc text-cyan-200 min-h-full pt-10 antialiased font-semibold text-lg mt-2">{qinfo.questionText}</p>
  </div>
  <div className="py-10 px-10">
  <p className="text-white text-lg">Choose your answer from given options:</p>
   <ul className="list-outside mt-3">
   {qinfo.answeroptions.map(option=>
   <li className="text-cyan-300 cursor-pointer px-4 py-2 my-2 rounded-md bg-transparent border-solid border-2 border-violet-500 bg-cyan-900 font-bold hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-white-300" onClick={()=>handleSubmit(option.isRight,qinfo.numb)}>{option.answerText}</li>
   )}
   </ul> 
  </div>
  </div>
  ); 
}