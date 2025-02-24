import React from 'react'
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul className='flex justify-between border border-blue-300 p-5 rounded-md'>
      <li><NavLink to="/">Pagination</NavLink></li>
      <li><NavLink to="/search">Search</NavLink></li>
      <li><NavLink to="/modal">Modal</NavLink></li>
      <li><NavLink to="/lazyLoadingimage">LazyImage</NavLink></li>
      <li><NavLink to="/form">SimpleForm</NavLink></li>
      <li><NavLink to="/reactHook">ReactHookForm</NavLink></li>
      <li><NavLink to="/paginationSelf">PaginationSelf</NavLink></li>
      <li><NavLink to="/todo">Todo</NavLink></li>
      </ul>
    </div>
  )
}

export default Header