import React from 'react';
import { Card } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const Player = ({ player }) => {
    const TEAM_ONE = 'The Originals';
    const TEAM_TWO = 'Supersonic Sixers';
    const TEAM_THREE = 'Cool Crunchers';

    return (
        <Card
            variant='outlined'
            className={`py-2 px-4 my-2 d-lg-flex justify-content-between rounded-3 ${
                player.already_bidded && ' bat-bg-secondary text-white'
            }`}>
            <div className='d-flex gap-3 align-items-center w-50'>
                <img
                    src={
                        player.photo != null && player.photo !== ''
                            ? `./images/players/${player.photo}`
                            : `./images/players/1616252974.png`
                    }
                    alt='player profile'
                    className='playerListPlayerProfileImg'
                />
                {player.already_bidded ? (
                    <div className='d-flex justify-content-between flex-column px-3 py-2 rounded-3'>
                        <h6>{player.name}</h6>
                        <div className='d-flex align-items-center gap-2'>
                            <h6>
                                {player.sold_team === 1
                                    ? TEAM_ONE
                                    : player.sold_team === 2
                                    ? TEAM_TWO
                                    : TEAM_THREE}
                            </h6>
                        </div>
                    </div>
                ) : (
                    <h6>{player.name}</h6>
                )}
            </div>
            <div className='d-flex gap-3 align-items-center w-50'>
                {player.already_bidded ? (
                    <>
                        <Chip
                            label={`$${player.sold_price}`}
                            className='bg-orange text-white text-bold fs-4'
                            style={{ width: '33.33333%' }}
                        />
                        <Chip
                            label={player.player_category}
                            variant='outlined'
                            className='bg-light bat-primary text-bold'
                            style={{ width: '33.33333%' }}
                        />
                        <Chip
                            label={player.category}
                            variant='outlined'
                            className='bg-light bat-primary text-bold'
                            style={{ width: '33.33333%' }}
                        />
                    </>
                ) : (
                    <>
                        <Chip
                            label={`$${player.base_price}`}
                            className='bat-bg-primary text-white text-bold fs-4'
                            style={{ width: '33.33333%' }}
                        />
                        <Chip
                            label={player.player_category}
                            color='success'
                            variant='outlined'
                            className='text-bold'
                            style={{ width: '33.33333%' }}
                        />
                        <Chip
                            label={player.category}
                            color='success'
                            variant='outlined'
                            className='text-bold'
                            style={{ width: '33.33333%' }}
                        />
                    </>
                )}
            </div>
        </Card>
    );
};

export default Player;
