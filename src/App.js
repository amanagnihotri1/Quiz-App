import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Login from "./pages/Login";
import Userquiz from "./pages/Userquiz";
import './App.css';
function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Login/>}/>
   <Route path="/quiz" element={<Userquiz/>}/>

   </Routes>
   </BrowserRouter> 
  );
}

export default App;
