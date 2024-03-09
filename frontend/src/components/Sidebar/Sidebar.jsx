import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFire, faHouse, faMoon, faSignOut, faStar } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {

        const togActive = () => {
            
            const body = document.querySelector("body");
            body.classList.toggle("dark");
            // const body = document.querySelector("body"),
            //     modeToggle = body.querySelector(".input-mode");
            // modeToggle.addEventListener("click", () => {
            
                // })
            }
  return (
    <nav className='sidebar'>
        <div className='brands flex items-center'>

        <div className='logo-image'>
            <img src='../../src/assets/react.svg' alt='' />
        </div>

        <span className='logo_name '>fhanzeMarket</span>
        </div>

        <div className='side-menu mt-[40px] h-[calc(100vh-90px)] flex flex-col justify-between'>
            <ul className='side__links'>
                <li><a href="">
                <FontAwesomeIcon icon={faHouse} className='side_ico' />
                    <span className=''>Home</span>
                    </a></li>
                    <li><a href="">
                <FontAwesomeIcon icon={faFire} className='side_ico' />
                    <span className=''>Trending</span>
                    </a></li>
                    <li><a href="">
                <FontAwesomeIcon icon={faStar} className='side_ico' />
                    <span className=''>Popular</span>
                    </a></li>
                    <li><a href="">
                <FontAwesomeIcon icon={faHouse} className='side_ico' />
                    <span className=''>Home</span>
                    </a></li>
            </ul>

            <ul className='user-section'>
            <li><a href="">
                <FontAwesomeIcon icon={faSignOut} className='side_ico' />
                    <span className=''>Logout</span>
                    </a></li>
            
                    <li className='toggle-mode'><a href="">
                <FontAwesomeIcon icon={faMoon} className='side_ico' />
                    <span className=''>Dark Mode</span>
                    </a>
                    
                    <button className='input-mode ' onClick={togActive} >
                        <span className='switch-mode'></span>
                    </button>
                    </li>
            </ul>
        </div>

        </nav>
    )
}

export default Sidebar