import { faBars, faHamburger } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const Navbar = () => {
    const hamActive = () => {
        // const [navActive, setNavActive] = useState(false);
        const SideActive = document.querySelector(".sidebar");
        SideActive.classList.toggle("side-close");

        
        
    }
  return (
    <button onClick={hamActive}>
        <FontAwesomeIcon icon={faBars} className='ham-menu text-xl'/>

    </button>
  )
}

export default Navbar