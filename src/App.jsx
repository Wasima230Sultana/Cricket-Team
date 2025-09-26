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
const playersPromise = fetchPlayers();


function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(600000)
  const [purchasePlayers, setPurchasePlayers] = useState([])


  const removePlayer = (p) => {
    const filteredData = purchasePlayers.filter(ply=> ply.name !== p.name)
    setPurchasePlayers(filteredData)
    setAvailableBalance(availableBalance + parseInt(p.price.split("USD").join("").split("USD").join("")))
  };
  return (
    <>
    
<Navbar availableBalance={availableBalance}></Navbar>
<div className=' max-w-[1200px] mx-auto flex justify-between items-center'>
  <h1 className='font-bold text-2xl'>{
    toggle===true?"Available Players":`Selected Players (${purchasePlayers.length}/6)`
    }</h1>
  <div>
    <button onClick={()=>setToggle(true)} className={`py-3 px-5 border-1 border-gray-400 rounded-l-2xl border-r-0 ${toggle===true?"bg-[#E7FE29]":""}  font-bold`}>Available</button>
    <button onClick={()=>setToggle(false)} className={`px-5 py-3 border-1 border-gray-400 rounded-r-2xl border-l-0 font-bold ${toggle===false?"bg-[#E7FE29]":""}`}>selected <span>({purchasePlayers.length})</span></button>
  </div>

</div>

{
  toggle === true?<Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
  <AvailablePlayers purchasePlayers={purchasePlayers} setPurchasePlayers={setPurchasePlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playersPromise={playersPromise}></AvailablePlayers>
</Suspense>:<SelectedPlayers removePlayer={removePlayer} purchasePlayers={purchasePlayers}></SelectedPlayers>
}




    </>
  )
}

export default App
