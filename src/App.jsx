// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'
import { Suspense, useState } from 'react'

const fetchPlayers = async()=>{
  const res = await fetch("/players.json")
  return res.json()
}


function App() {
  const [toggle, setToggle] = useState(true);
const playersPromise = fetchPlayers();
  return (
    <>
    
<Navbar></Navbar>
<div className=' max-w-[1200px] mx-auto flex justify-between items-center'>
  <h1 className='font-bold text-2xl'>Available Players</h1>
  <div>
    <button onClick={()=>setToggle(true)} className={`py-3 px-5 border-1 border-gray-400 rounded-l-2xl border-r-0 ${toggle===true?"bg-[#E7FE29]":""}  font-bold`}>Available</button>
    <button onClick={()=>setToggle(false)} className={`px-5 py-3 border-1 border-gray-400 rounded-r-2xl border-l-0 font-bold ${toggle===false?"bg-[#E7FE29]":""}`}>selected <span>(0)</span></button>
  </div>

</div>

{
  toggle === true?<Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
  <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
</Suspense>:<SelectedPlayers></SelectedPlayers>
}




    </>
  )
}

export default App
