import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className='search-wrap h-[45px] w-[36rem]'>
      <input type='text' placeholder='Search here. . .'></input> 
      <button className='absolute right-0 bg-slate-400 h-full w-20   '>
        <FontAwesomeIcon icon={faSearch} className=''/>
        </button> 
    </div>
  )
}

export default SearchBar