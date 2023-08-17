import React, { useState } from 'react';
// import logo from 'src\biaLogo.png';
import { Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
 //import HiOutlineBars3Icon from '@mui/icons-material/HiOutlineBars3';

const Navbar = () => {
  // const [openMenu, setOpenMenu] = useState(false);
<div>

<ul>
  
    <li href="#">Home</li>
    
    <li href="#">About</li>
    
    <li href="#">ABC</li>
    
    <li href="#">Contact</li>
 </ul>   
    </div>

  console.log("menu option", menuOptions);

  return (
    <nav className='styling' >
      <div className='nav-logo-container'>
        <img src='./biaLogo.png' alt='logo' className='logo'/>
      </div>
      <div className='navbar-link-container'>
        <a href='src\components\home.js'>Home</a>
        <a href='/About'>About</a>
        <a href='/ABC'>ABC</a>
        <a href='/Contact'>Contact</a>
        <a href=''>
          <ShoppingCartRoundedIcon className='navbar-cart-icon' />
        </a>
</div>
        <button className='primary-button'>Booking Now</button>
      
      <div className='navbar-menu-container'>
        {/* <HiOutlineBars3Icon onClick={() => setOpenMenu(true)} /> */}
      </div>
    </nav>
  );
};

export default Navbar;
