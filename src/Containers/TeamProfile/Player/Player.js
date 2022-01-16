import React from 'react';
import Chip from '@mui/material/Chip';
import playerImg from '../../../assets/images/players/profile.png';

const Player = ({ player }) => {
    let cardBg = '#fff';

    if (player.sold_team) {
        cardBg = '651414';
    }
    return (
        <div className='p-2 shadow rounded-3 teamProfileCard d-flex flex-column'>
            <div className='d-flex justify-content-between gap-2'>
                <img src={playerImg} alt='' className='teamProfilePlayerImg' />
                <div className='d-flex flex-column gap-2'>
                    <Chip
                        label={`$${player.sold_price}`}
                        color='primary'
                        variant='outlined'
                        className='text-bold bat-bg-beguni text-white'
                    />
                    <Chip
                        label={`Age: ${player.age}`}
                        color='secondary'
                        className='text-bold bat-bg-secondary'
                    />
                    <Chip
                        label={player.player_category}
                        color='primary'
                        className='text-bold bat-bg-orange'
                    />
                </div>
            </div>

            <h5 className='bat-primary text-center'>{player.name}</h5>
        </div>
    );
};

export default Player;
