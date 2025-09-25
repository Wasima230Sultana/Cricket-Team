// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'
import { Suspense } from 'react'

const fetchPlayers = async()=>{
  const res = await fetch("/players.json")
  return res.json()
}


function App() {
  
const playersPromise = fetchPlayers();
  return (
    <>
    
<Navbar></Navbar>
<Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
  <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
</Suspense>
{/* <SelectedPlayers></SelectedPlayers> */}


    </>
  )
}

export default App
