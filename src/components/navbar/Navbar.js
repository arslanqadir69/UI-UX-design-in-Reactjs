import React,{useState} from 'react';
import './navbar.css';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import Logo from '../../images/GPT-3.png'; 
const Menu=()=>(
  <>
        <p><a href='#'>Home</a></p>
        <p><a href='#'>About</a></p>
        <p><a href='#'>Contact</a></p>
        <p><a href='#'>Blogs</a></p>
        </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu]=useState(false);
  return (
    <div className='gt3-navbar'>
     <div className='gt3-navbar-links'>
      <div className='gt3-nvbar-links-logo'>
          <img src={Logo} alt="Logo" />
      </div>
      <div className='gt3-navbar-links-container'>
       <Menu/>

        
      </div>
      <div className='gt3-navbar-sign'>
        <p>Sign In</p>
      <button className='gt3-navbar-links-container-btn'>Sign Us</button>
      </div>
      <div className='gt3-navbar-menu'>
        {
          toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={()=>setToggleMenu(false)}/>
          : <RiMenu3Line color='#fff' size={27} onClick={()=>setToggleMenu(true)}/>
        }

        {toggleMenu && (
          <div className='gt3-navbar-menu-container scale-up-center'>
           <div className='gt3-navbar-menu-container-links'>
           <Menu/>
           <div className='gt3-navbar-menu-container-links-sign'>
        <p>Sign In</p>
      <button className='gt3-navbar-links-container-btn'>Sign Us</button>
      </div>
           </div>
          </div>
        )}
      </div>
     </div>
    </div>
  );
};

export default Navbar;