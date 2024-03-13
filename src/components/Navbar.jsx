import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import Logo from '../assets/Logo.svg';

const Navbar = () => {
  return (
    <>
      <header className='w-full flex items-center justify-center px-7'>
        <nav className='max-w-[1200px] w-full h-12 flex items-center'>
          <Link to='/'><img src={Logo} alt="Logo" /></Link>
        </nav>
      </header>
    </>
  )
}

export default Navbar;