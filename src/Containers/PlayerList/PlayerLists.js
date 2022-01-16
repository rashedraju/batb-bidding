import React from 'react';
import './PlayerList.css';
import Player from './Player/Player';

const PlayerLists = () => {
    const unsoldPlayer = {
        name: 'John Doe',
        age: 25,
        image: 'profile.png',
        type: 'batter',
        initialPrice: 20000,
    };

    const soldPlayer = {
        name: 'John Doe',
        age: 25,
        image: 'profile.png',
        type: 'batter',
        initialPrice: 20000,
        teamName: 'Team Name',
        teamImg: 'crunchers.jpeg',
    };

    const unsoldPlayersEl = new Array(4)
        .fill(0)
        .map((el) => <Player player={unsoldPlayer} />);

    const soldPlayersEl = new Array(3)
        .fill(0)
        .map((el) => <Player player={soldPlayer} sold />);

    return (
        <>
            <h2 className='text-center text-white my-3 text-uppercase'>
                Player Inventory
            </h2>
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
    );
};

export default PlayerLists;
