import React from 'react';
import navIng from '../../assets/logo.png'
import dollarIng from '../../assets/dollar.png'
const Navbar = () => {
    return (
         <div className="navbar max-w-[1200px] mx-auto">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">
      <img className='w-[60px] h-[60px]' src={navIng} alt="" />
    </a>
  </div>
  <div className="flex items-center ">
    <span className='mr-1'>0</span>
    <span className='mr-1'>Coin</span>
    <img className='w-6' src={dollarIng} alt="" />
  </div>
</div>
    );
};

export default Navbar;