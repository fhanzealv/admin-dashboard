import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className='search-wrap h-[45px] w-[36rem]'>
      <input type='text' placeholder='Search here. . .'></input> 
      <button className='absolute right-0 bg-slate-200 h-full w-16   '>
        <FontAwesomeIcon icon={faSearch} className='text-slate-500'/>
        </button> 
    </div>
  )
}

export default SearchBar