import React from 'react'
import "./Navbar.css"
import {HiMenuAlt1} from "react-icons/hi"
import NavMenu from '../../layouts/NavMenu/NavMenu'
const Navbar = () => {
  return (
    <div className='navbar' >
<img className='logoImg' src="/img/Logo.png" alt="LogIMg" />
<ul className='nav_list' >
  <li className='navListing'>OUR FLAVOURS</li>
  <li className='navListing'>OUR NEWS</li>
  <li className='navListing'>ABOUT US </li>
</ul>

<button className='nav_download_button'>DOWNLOAD NOW</button>
   <NavMenu>
    <HiMenuAlt1 className='menuIcon'/>
    </NavMenu> 

    </div>
  )
}

export default Navbar