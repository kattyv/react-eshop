import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import storeLogo from '../assets/brand/logo.svg'

export const Header: FC = () => {
  return (
    <header>
        <img src={ storeLogo } alt="logo" style={{ width: '50px' }} />
        Toucan Store

        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/store">Store</NavLink></li>
          </ul>
        </nav>
    </header>
  )
}
