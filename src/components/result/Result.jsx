import React from "react";
import {Link} from "react-router-dom";
export default function Result({score,total,attempted})
{
    return(
        <div className="flex justify-center w-full h-full pt-40 items-center">
        <div className="w-full self-center max-w-sm  rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="bg-[#0f172a] flex flex-col items-center pb-10">
        <img className="mb-3 w-28 h-28 rounded-full shadow-lg mt-3" src="https://cdn.dribbble.com/users/1238709/screenshots/4069900/success_celebration_800x600.gif"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Congratulations,You Have Scored</h5>
        <span className="text-2xl font-bold text-cyan-100 dark:text-cyan-100">{score}/{total}</span>
        <h4 className="font-bold text-2xl text-cyan-100 mt-10">Score Card</h4>
        <div className="flex mt-4 space-x-3 md:mt-6">
            <Link to="/" className="inline-flex items-center py-2 px-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Start again</Link>
        </div>
      
    </div>
 </div>

</div>
);
}