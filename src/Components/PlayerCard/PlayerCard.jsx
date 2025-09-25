import React, { useState } from 'react';
import userImage from '../../assets/use-1.png'
import flagImg from '../../assets/Vector.png'
const PlayerCard = ({ player, setAvailableBalance, availableBalance,setPurchasePlayers, purchasePlayers}) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleSelected = (playData) => {
        const playerPrice = parseInt( playData.price.split("USD").join("").split("USD").join(""))

        if(availableBalance < playerPrice) {
            alert('not enough coin');
            return;
            }
            
        setIsSelected(true)
        setAvailableBalance(availableBalance - playerPrice);
        setPurchasePlayers([...purchasePlayers, playData]);

    };

    return (
        <div className="card bg-base-100 w-96 shadow-sm p-4">
            <figure>
                <img className='w-full h-[300px] object-cover'
                    src={player.image}
                    alt="Shoes" />
            </figure>
            <div className="mt-4">
                <div className="flex">
                    <img src={userImage} alt="" />
                    <h2 className="card-title ml-2">{player.name}</h2>
                </div>


                <div className='flex justify-between items-center mt-4 border-b-1 border-gray-400 pb-2'>
                    <div className='flex items-center'>
                        <img className='w-[20px] h-[20px]' src={flagImg} alt="" />
                        <span className='ml-2'>{player.country}</span>
                    </div>
                    <button className='btn'>{player.playing_role}</button>
                </div>


                <div className='flex font-bold justify-between items-center'>
                    <span>Rating</span>
                    <span>{player.rating}</span>
                </div>


                <div className='flex justify-between items-center mt-4'>
                    <span className='font-bold '>{player.batting_style}</span>
                    <span>{player.bowling_style}</span>
                </div>

                <div className="card-actions mt-4 flex justify-between items-center">
                    <p className='font-bold'>Price: ${player.price}</p>
                    <button disabled={isSelected}
                        onClick={() => {handleSelected(player)}}
                        className="btn">
                        {isSelected === true ? "Selected" : "Choose Player"}</button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;