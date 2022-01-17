import React from 'react';
import Chip from '@mui/material/Chip';

const Player = ({ player }) => {
    return (
        <div className='p-2 shadow rounded-3 teamProfileCard d-flex flex-column'>
            <div className='d-flex justify-content-between gap-2'>
                <img
                    src={
                        player.photo != null && player.photo !== ''
                            ? `./images/players/${player.photo}`
                            : `./images/players/1616252974.png`
                    }
                    alt=''
                    className='teamProfilePlayerImg'
                />
                <div className='d-flex flex-column gap-2'>
                    <Chip
                        label={`$${player.sold_price}`}
                        color='primary'
                        variant='outlined'
                        className='text-bold bat-bg-beguni text-white'
                    />
                    <Chip
                        label={`Category: ${player.category}`}
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
