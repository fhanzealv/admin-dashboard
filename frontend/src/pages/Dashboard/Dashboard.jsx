import React from 'react'
import './Dashboard.css'
import Navbar from '../../components/Navbar/Navbar'
import SearchBar from '../../components/SearchBar/SearchBar'
import Sideakun from '../../components/Sideakun/Sideakun'
import loGo from '../../assets/react.svg'

const Dashboard = () => {
  return (
    <div className='dashboard '>
        <div className='top fixed flex left-[250px] gap-8 justify-between items-center w-[calc(100%-250px)]  bg-[var(--nav-color)]  '>
            <Navbar />
            <SearchBar />
            <Sideakun />
        </div>

        <section className="content pt-16">
          <div className='card_wrapper flex items-center m-[70px_0_30px]'>
              <div className='card bg-red-400 py-4 relative overflow-hidden'>
                <div className="card-top mb-4 overflow-hidden relative">
                  <div className="overlay bg-green-300/50 absolute w-full h-full top-0"></div>
                  <img src={loGo} alt=''/>
                </div>
                <div className="card-bot">
                  
                </div>
              </div>
          </div>
        </section>
    </div>
  )
}

export default Dashboard