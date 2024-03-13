import React from 'react'
import  "./Sidenav.css"
import { IoHome } from "react-icons/io5";
import { GrNotes } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";
import { TbDeviceIpadHorizontalQuestion } from "react-icons/tb";
import { Link } from 'react-router-dom';

function Sidenav() {
  return (
    <>
      
     <div className="sidemainnav">

         <div className="insidemain">

          <div className="navbutton1">
            <Link to={'/'}><li><IoHome size={40}  /></li></Link>
          </div>
          <div className="navbutton2">
            <a href="">
              <Link to={''}><li><GrNotes  size={40}  /></li></Link>
            </a>
          </div>
          <div className="navbutton3">
            <a href="">
              <li><TbDeviceIpadHorizontalQuestion  size={40} />  </li>
            </a>
          </div>
          <div className="navbutton4">
            <a href="">
              <li><IoIosContact size={60} /></li>
            </a>
          </div>
          <div className="navbutton4">
            <a href="">
              <li></li>
            </a>
          </div>

         </div>

     </div>


    </>
  )
}

export default Sidenav
