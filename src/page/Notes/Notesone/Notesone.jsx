import React from 'react'
import './Notesonne.css'
import Sidenav from '../../../component/Sidenav/Sidenav'
import Uppernav from '../../../component/Uppernav/Uppernav'
import { Link } from "react-router-dom";
function Notesone() {
  return (
    <>
    <Sidenav/>
    <Uppernav/>
     <div className="Notesdivmain-one">
      
<div className="Notesdivmain-page">
    <div className="Notesdivmain-page-left">
      <div className="notesheader-text"> <h1>Notes</h1>  </div>
      <div className="notesheader-course"><h1>Select Your Course</h1></div>
      <div className="notes-course-detail">
       <Link to={'/two'}> <a href=""> <div className="notes-course-detail-cse"><h2>Computer Science and Engineering</h2></div></a></Link>
      <a href=""><div className="notes-course-detail-cse"><h2>Computer Science and Engineering</h2></div></a>
      <a href=""><div className="notes-course-detail-cse"><h2>Computer Science and Engineering</h2></div></a>
      <a href=""><div className="notes-course-detail-cse"><h2>Computer Science and Engineering</h2></div></a>
       <a href=""><div className="notes-course-detail-cse"><h2>Computer Science and Engineering</h2></div></a>
       <a href=""><div className="notes-course-detail-cse"><h2>Computer Science and Engineering</h2></div></a>
       <a href=""><div className="notes-course-detail-cse"><h2>Computer Science and Engineering</h2></div></a>
       <a href=""><div className="notes-course-detail-cse"><h2>Computer Science and Engineering</h2></div></a>
       <a href=""><div className="notes-course-detail-cse"><h2>Computer Science and Engineering</h2></div></a>

      </div>
    </div>
    <div className="Notesdivmain-page-right"></div>
</div>

</div> 
    </>
  )
}

export default Notesone
