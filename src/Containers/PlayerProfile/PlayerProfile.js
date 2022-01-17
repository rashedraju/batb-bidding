import React, { useState, useEffect } from 'react';
import './PlayerProfile.css';
import axios from 'axios';
import { PLAYER_PROFILE_PAGE } from '../../constant';
import anim from '../../assets/images/anim.gif';
import unsoldImg from '../../assets/images/unsold.png';

import teamOneImg from '../../assets/images/teams/1.png';
import teamTwoImg from '../../assets/images/teams/2.png';
import teamThreeImg from '../../assets/images/teams/3.png';

const PlayerProfile = () => {
    const [playerProfile, setPlayerProfileData] = useState(null);

    const TEAM_ONE = 'The Originals';
    const TEAM_TWO = 'Supersonic Sixers';
    const TEAM_THREE = 'Cool Crunchers';

    useEffect(() => {
        const fetchBiddingData = setInterval(() => {
            try {
                axios.get(PLAYER_PROFILE_PAGE).then((res) => {
                    console.log(res.data);
                    setPlayerProfileData(res.data);
                });
            } catch (error) {
                console.log(error);
            }
        }, 2000);

        return () => {
            clearInterval(fetchBiddingData);
        };
    }, []);

    let teamName = '';
    let teamImg = null;

    if (playerProfile?.sold_team === 1) {
        teamName = TEAM_ONE;
        teamImg = teamOneImg;
    } else if (playerProfile?.sold_team === 2) {
        teamName = TEAM_TWO;
        teamImg = teamTwoImg;
    } else if (playerProfile?.sold_team === 3) {
        teamName = TEAM_THREE;
        teamImg = teamThreeImg;
    }

    return (
        <>
            {playerProfile ? (
                <>
                    <h1 className='text-center text-white my-4 pr-5'>
                        Player Profile
                    </h1>
                    <div className='row PlayserProfileBG'>
                        <div className='col-4 d-flex flex-column align-items-end mr-2'>
                            <div className='mb-5 text-right'>
                                <h1 className='text-right'>
                                    {playerProfile.name}
                                </h1>
                                <div className='text-right player_info border text-white text-bold text-center px-6 rounded-5 border-orange bg-orange d-inline-block'>
                                    {playerProfile.player_category}
                                </div>
                            </div>

                            <div className='p-2 player_info'>
                                Designation:{' '}
                                <strong>{playerProfile.designation}</strong>
                            </div>
                            <div className='p-2 player_info'>
                                Department:
                                <strong>{playerProfile.department}</strong>
                            </div>
                            <div className='p-2 player_info'>
                                Batting Style:{' '}
                                <strong>{playerProfile.batting_Style}</strong>
                            </div>
                            <div className='p-2 player_info'>
                                Bowling Style:{' '}
                                <strong>{playerProfile.bowling_Style}</strong>
                            </div>
                            <div className='p-2 player_info'>
                                Category:{' '}
                                <strong>{playerProfile.category}</strong>
                            </div>
                        </div>
                        <img
                            src={
                                playerProfile.photo != null &&
                                playerProfile.photo !== ''
                                    ? `./images/players/${playerProfile.photo}`
                                    : `./images/players/1616252974.png`
                            }
                            alt='player profile'
                            className='playerProfileImg col-4'
                        />
                        <div className='col-4 d-flex flex-column'>
                            {playerProfile.already_bidded ? (
                                <>
                                    <div className='p-2 my-2 border text-center'>
                                        <p className='mb-0'>Sold Price</p>
                                        <h2>${playerProfile.sold_price}</h2>
                                    </div>
                                    <div className='p-2 my-1 d-flex gap-3 align-items-center border text-center'>
                                        <img
                                            src={teamImg}
                                            alt=''
                                            className='p-2 ownerTeamImg'
                                        />
                                        <h3>{teamName}</h3>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className='p-2 my-2 border text-center'>
                                        <p className='mb-0'>
                                            Initial Bidding Price
                                        </p>
                                        <h2>${playerProfile.base_price}</h2>
                                    </div>
                                    <div className='text-center mt-5'>
                                        <img
                                            src={unsoldImg}
                                            alt=''
                                            style={{ width: '20rem' }}
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </>
            ) : (
                <img src={anim} alt='' className='loading-img mx-auto' />
            )}
        </>
    );
};

export default PlayerProfile;
