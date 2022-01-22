import React from 'react';
import Chip from '@mui/material/Chip';

const Player = ({ player, colorCode }) => {
    return (
        <div
            className='p-2 shadow rounded-3 teamProfileCard d-flex flex-column justify-content-around'
            style={{
                backgroundImage: `linear-gradient(45deg, #dfdfdf, ${colorCode})`,
            }}>
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
                        label={`$${player.sold_price?.toLocaleString()}`}
                        color='primary'
                        variant='outlined'
                        className='text-bold bat-bg-primary text-white'
                        style={{ fontSize: '11px' }}
                    />
                    <Chip
                        label={`Category: ${player.category}`}
                        color='secondary'
                        className='text-bold bat-bg-primary'
                        style={{ fontSize: '11px' }}
                    />
                    <Chip
                        label={player.player_category}
                        color='primary'
                        className='text-bold bat-bg-primary'
                        style={{ fontSize: '11px' }}
                    />
                </div>
            </div>

            <h5
                className='color-white text-center mt-1'
                style={{ fontSize: '16px' }}>
                {player.name?.toUpperCase()}
            </h5>
        </div>
    );
};

export default Player;
