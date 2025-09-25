import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import navIng from './assets/logo.png'
import dollarIng from './assets/dollar.png'

function App() {
  

  return (
    <>
      <div class="navbar max-w-[1200px] mx-auto">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">
      <img className='w-[60px] h-[60px]' src={navIng} alt="" />
    </a>
  </div>
  <div class="flex items-center ">
    <span className='mr-1'>0</span>
    <span className='mr-1'>Coin</span>
    <img src={dollarIng} alt="" />
  </div>
</div>
      
    </>
  )
}

export default App
