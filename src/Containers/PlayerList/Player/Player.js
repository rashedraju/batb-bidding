import React from 'react';
import { Card } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const Player = ({ player, sold = false }) => {
    const playerImage = require(`../../../assets/images/players/${player.image}`);
    const teamImage = sold
        ? require(`../../../assets/images/teams/3.png`)
        : null;
    return (
        <Card
            variant='outlined'
            className={`p-3 my-2 d-lg-flex justify-content-between rounded-3 ${
                sold && ' bat-bg-secondary text-white'
            }`}>
            <div className='d-flex gap-3 align-items-center'>
                <img
                    src={playerImage}
                    alt='player profile'
                    className='playerListPlayerProfileImg'
                />
                {sold ? (
                    <div className='d-flex justify-content-between flex-column px-3 py-2 rounded-3'>
                        <h6>{player.name}</h6>
                        <div className='d-flex align-items-center gap-2'>
                            <h6>Team Name</h6>
                        </div>
                    </div>
                ) : (
                    <h6>{player.name}</h6>
                )}
            </div>
            <div className='d-flex flex-column justify-content-between'>
                <Chip
                    label='$20,000'
                    className='bat-bg-primary text-white text-bold fs-4'
                />
                <Stack direction='row' spacing={1}>
                    {sold ? (
                        <>
                            <Chip
                                label='Batter'
                                variant='outlined'
                                className='bg-light bat-primary'
                            />
                            <Chip
                                label='Age: 25'
                                variant='outlined'
                                className='bg-light bat-primary'
                            />
                        </>
                    ) : (
                        <>
                            <Chip
                                label='Batter'
                                color='success'
                                variant='outlined'
                            />
                            <Chip
                                label='Age: 25'
                                color='success'
                                variant='outlined'
                            />
                        </>
                    )}
                </Stack>
            </div>
        </Card>
    );
};

export default Player;
