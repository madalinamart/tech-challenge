import React from 'react'
import { SearchNormal } from 'iconsax-react'

const GlobalFilter = ({filter, setFilter}) => {
  return (
      <>
      <div className='search'>
      <span>
          {' '}
    <input value= {filter || ''} 
    onChange= {(e) => setFilter(e.target.value)} placeholder='Search user'/>
    </span>
    <SearchNormal className='search-icon'/>
    </div>
    </>
  )
}

export default GlobalFilter