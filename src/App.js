import {Routes, Route } from "react-router-dom";
import './App.css';
// import Sidenav from "./component/Sidenav/Sidenav";
import Uppernav from "./component/Uppernav/Uppernav";
import Notesone from "./page/Notes/Notesone/Notesone";
import Notestwo from "./page/Notes/Notestwo/Notestwo";

function App() {
  return (
    <>
    <Routes>
     <Route path="/" element={<Notesone/>}></Route>
     <Route path="two" element={<Notestwo/>}></Route>
    </Routes>
    </>
  );
}

export default App;
