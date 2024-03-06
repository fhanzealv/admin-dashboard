import React from 'react'

const Sidebar = () => {
  return (
    <nav className='sidebar'>
        <div className='brands flex items-center'>

        <div className='logo-image'>
            <img src='../../src/assets/react.svg' alt='' />
        </div>

        <span className='logo_name '>fhanzeMarket</span>
        </div>

        <div className='side-menu'>
            <ul className='side__links'>
                <li><a href="">
                    <span className=''>Home</span>
                    </a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
            </ul>
        </div>

        </nav>
    )
}

export default Sidebar