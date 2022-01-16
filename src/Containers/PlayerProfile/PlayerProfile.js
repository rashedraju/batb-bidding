import React, { useState, useEffect } from 'react';
import PlayerProfileImg from '../../assets/images/players/profile.png';
import sixsersImg from '../../assets/images/teams/2.png';
import './PlayerProfile.css';
import axios from 'axios';
import { PLAYER_PROFILE_PAGE } from '../../constant';
import anim from '../../assets/images/anim.gif';

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
                                <div className='text-right player_info border bat-secondary text-bold text-center px-2 rounded-5 border-orange bg-orange d-inline-block'>
                                    {playerProfile.player_category}
                                </div>
                            </div>

                            <div className='p-2 player_info'>
                                Age: <strong>{playerProfile.age} Years</strong>
                            </div>
                            <div className='p-2 player_info'>
                                Designation:{' '}
                                <strong>{playerProfile.designation}</strong>
                            </div>
                            <div className='p-2 player_info'>
                                Department:{' '}
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
                            src={PlayerProfileImg}
                            alt='player profile'
                            className='playerProfileImg col-4'
                        />
                        <div className='col-4 d-flex flex-column'>
                            <div className='p-2 my-2 border text-center'>
                                <p className='mb-0'>Initial Bidding Price</p>
                                <h2>${playerProfile.base_price}</h2>
                            </div>
                            <div className='p-2 my-1 d-flex gap-3 align-items-center border text-center'>
                                <img
                                    src={sixsersImg}
                                    alt=''
                                    className='p-2 ownerTeamImg'
                                />
                                <h3>
                                    {playerProfile.sold_team === '1'
                                        ? TEAM_ONE
                                        : playerProfile.sold_team === '2'
                                        ? TEAM_TWO
                                        : TEAM_THREE}
                                </h3>
                            </div>
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
