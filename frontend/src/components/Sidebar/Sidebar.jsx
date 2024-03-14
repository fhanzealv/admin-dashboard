import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFire, faHouse, faMoon, faSignIn, faSignOut, faStar } from '@fortawesome/free-solid-svg-icons'

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
        <div className='brands h-[45px] flex items-center'>

        <div className='logo-image'>
            <img src='../../src/assets/react.svg' alt='' />
        </div>

        <span className='logo_name '>fhanzeMarket</span>
        </div>

        <div className='side-menu mt-[40px] h-[calc(100vh-135px)] flex flex-col justify-between'>
            <ul className='side__links'>
                <li className=''><a href="">
                <FontAwesomeIcon icon={faHouse} className='side_ico' />
                    <span className='text-link'>Home</span>
                    </a></li>
                    <li><a href="">
                <FontAwesomeIcon icon={faFire} className='side_ico' />
                    <span className='text-link'>Trending</span>
                    </a></li>
                    <li><a href="">
                <FontAwesomeIcon icon={faStar} className='side_ico' />
                    <span className='text-link'>Popular</span>
                    </a></li>
                    <li><a href="">
                <FontAwesomeIcon icon={faHouse} className='side_ico' />
                    <span className='text-link'>Home</span>
                    </a></li>
            </ul>

            <ul className='user-section border-t border-[var(--sec-color)]'>
            <li><a href="">
                <FontAwesomeIcon icon={faSignIn} className='side_ico' />
                    <span className='text-link'>Login</span>
                    </a></li>
            
                    <li className='toggle-mode'><a href="">
                <FontAwesomeIcon icon={faMoon} className='side_ico' />
                    <span className='text-link'>Dark Mode</span>
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