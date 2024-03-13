import React from 'react'
import Sidenav from '../../../component/Sidenav/Sidenav'
import Uppernav from '../../../component/Uppernav/Uppernav'
import './Notestwo.css'
function Notestwo() {
  return (
    <>
      <Sidenav/>
      <Uppernav/>
      <div className="second-main">

<div className="second-main-part">
       <div className="second-main-part-left">
       <div className="second-text"> <h1>Notes</h1>  </div>
         <div className="notesheader-semester"><h1>Select Your Semester</h1></div>
         <div className="second-semester-detail">
            <div className="second-semester-detil-first-year">

                 <a href="">  <div className="second-semester-detatil-first"><h2> First Semester</h2></div></a>
                 <a href="">
                 <div className="second-semester-detatil-Second"> <h2>Second Semester</h2></div>
                 </a>
            </div> 
           <div className="second-semester-detil-second-year">

            <a href=""> <div className="second-semester-detatil-first"><h2> First Semester</h2></div></a>
          <a href=""> <div className="second-semester-detatil-Second"><h2> First Semester</h2></div></a>
           </div>
           <div className="second-semester-detil-third-year">

           <a href=""><div className="second-semester-detatil-first"><h2> First Semester</h2></div></a>
          <a href=""><div className="second-semester-detatil-first"><h2> First Semester</h2></div></a>
           </div>
           <div className="second-semester-detil-forth-year">
             
           <a href=""> <div className="second-semester-detatil-first"><h2> First Semester</h2></div></a>
           <a href=""> <div className="second-semester-detatil-Second"><h2> First Semester</h2></div></a>
           </div>
           

         </div>






       </div>
       <div className="second-main-part-right"></div>
   
    

</div>

</div>
        
    </>
  )
}

export default Notestwo
