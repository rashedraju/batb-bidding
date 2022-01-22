import React from 'react';

const Player = ({ player, colorCode, sl }) => {
    return (
        <tr>
            <td>{sl}</td>
            <td>{player.name}</td>
            <td>
                <img
                    src={
                        player.photo != null && player.photo !== ''
                            ? `./images/players/${player.photo}`
                            : `./images/players/1616252974.png`
                    }
                    alt=''
                    className='teamProfilePlayerImg'
                />
            </td>
            <td>${player.sold_price?.toLocaleString()}</td>
            <td>{player.category}</td>
            <td>{player.player_category}</td>
        </tr>
    );
};

export default Player;
