import React, { useState, useEffect } from 'react';
import './PlayerList.css';
import Player from './Player/Player';
import { PLAYER_LIST_PAGE } from '../../constant';
import axios from 'axios';
import Animation from '../Animation/Animation';

const PlayerLists = () => {
    const [palyers, setPlayers] = useState(null);

    useEffect(() => {
        const fetchBiddingData = setInterval(() => {
            try {
                axios.get(PLAYER_LIST_PAGE).then((res) => {
                    setPlayers(res.data);
                    console.log(res.data);
                });
            } catch (error) {
                console.log(error);
            }
        }, 5000);

        return () => {
            clearInterval(fetchBiddingData);
        };
    }, []);

    let unsoldPlayersEl = null;
    let soldPlayersEl = null;

    if (palyers) {
        unsoldPlayersEl = palyers.unsold_player
            .slice(0, 7)
            .map((el) => <Player player={el} />);
        soldPlayersEl = palyers.sold_player
            .slice(0, 7)
            .map((el) => <Player player={el} />);
    }
    return (
        <>
            {palyers ? (
                <>
                    <h1 className='text-center text-white my-3 text-uppercase'>
                        Player Inventory
                    </h1>
                    <div>
                        <div className='d-flex gap-5 justify-content-between'>
                            <h4 className='border d-block w-50 p-3 text-center rounded-4'>
                                Unsold
                            </h4>
                            <h4 className='border d-block w-50 p-3 text-center rounded-4'>
                                Sold
                            </h4>
                        </div>
                        <div className='d-flex gap-5 justify-content-between'>
                            <div className='w-50'>{unsoldPlayersEl}</div>
                            <div className='w-50'>{soldPlayersEl}</div>
                        </div>
                    </div>
                </>
            ) : (
                <Animation />
            )}
        </>
    );
};

export default PlayerLists;
