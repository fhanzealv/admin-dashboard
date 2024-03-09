import React from 'react'
import './Dashboard.css'
import Navbar from '../../components/Navbar/Navbar'
import SearchBar from '../../components/SearchBar/SearchBar'
import Sideakun from '../../components/Sideakun/Sideakun'

const Dashboard = () => {
  return (
    <div className='dashboard '>
        <div className='top fixed flex left-[250px] gap-8 justify-between items-center w-[calc(100%-250px)]  bg-[var(--nav-color)]  '>
            <Navbar />
            <SearchBar />
            <Sideakun />
        </div>

        <div className="content pt-16">
          <div className='title flex items-center m-[70px_0_30px]'>
qweqwe
          </div>
        </div>
    </div>
  )
}

export default Dashboard