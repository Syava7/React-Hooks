import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const TopBar = () => {
  return (
    <div>
      <nav className='navbar navbar-light'>
        <div className='container'>
          <Link to='/' className='navbar-brand'>
            Medium
          </Link>
          <ul className='nav navbar-nav pull-xs-right'>
            <li className='nav-item'>
              <NavLink exact to='/' className='nav-link'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/login' className='nav-link'>
                Sing in
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/register' className='nav-link'>
                Sing up
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default TopBar
