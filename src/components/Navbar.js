import React from 'react';
import { Link } from 'gatsby';

function Navbar() {
  return (
    <nav className='flex jc-sb ai-c bgc-aaefff p-10'>
        <h1>Web Warrior</h1>
        <div className='flex jc-sb ai-c w-300'>
          <Link to='/' className='c-f76b74'>Home</Link>
          <Link to='/about' className='c-f76b74'>About</Link>
          <Link to='/projects' className='c-f76b74'>Porfolio Projects</Link>
        </div>
    </nav>
  );
}

export default Navbar;