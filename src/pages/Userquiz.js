import React,{useState} from "react";
import Quiz from "../components/quizpage/Quiz";
import Footer from "../components/footer/Footer";
import Result from "../components/result/Result";
import "../pages/uquiz.css";
import questions from "../assets/questions";
export default function Userquiz()
{   const[score,setScore]=useState(0);
    const[question,setQuestion]=useState(0);
    const[isClicked,setClicked]=useState(false);
    const totalProblems=questions.length;
    const[attempted,setAttempted]=useState(null);
    const handleResult=(score)=>
    { 
      console.log(score);
      setClicked(!isClicked);
    }
    return(
    <>
    {isClicked?(<Result score={score} total={totalProblems} attempted={attempted}/>):(
            <div className="flex flex-col justify-between antialiased bg-gray-50 text-gray-600 min-h-screen pt-10">
    <Quiz className="self-end align-end" qinfo={questions[question]} key={questions[question].numb} setScore={setScore} attempted={attempted} setAttempted={setAttempted}/> 
   <Footer className="self-end bg-[#0f172a]-100" problemNumber={question} setQuestion={setQuestion} handleResult={handleResult} score={score} isClicked={isClicked} totalProblems={totalProblems}/>
   </div>
   )} 
 </>
    );
}