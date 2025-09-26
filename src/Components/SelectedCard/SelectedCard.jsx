import React from 'react';

const SelectedCard = ({player}) => {
    return (
         <div className='border-1 border-gray-400 flex justify-between items-center mt-5 p-2 rounded-xl'>
                <div className='flex items-center'>
                    <img className='h-[50px] w-[50px] rounded-xl' src={player.image} alt="" />
                    <div className='ml-2'>
                        <h1>{player.name}</h1>
                        <p className='text-xs'>{player.playing_role}</p>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co.com/rKzs9JMs/Frame.png" alt="" />
                </div>
            </div>
    );
};

export default SelectedCard;