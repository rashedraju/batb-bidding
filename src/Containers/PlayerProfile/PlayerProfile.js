import React, { useState, useEffect } from 'react';
import './PlayerProfile.css';
import axios from 'axios';
import { PLAYER_PROFILE_PAGE } from '../../constant';
import Animation from '../Animation/Animation';

import teamOneImg from '../../assets/images/teams/1.png';
import teamTwoImg from '../../assets/images/teams/2.png';
import teamThreeImg from '../../assets/images/teams/3.png';
import soldOut from '../../assets/images/sold-2.png';
import unsoldImg from '../../assets/images/unsold.png';

const PlayerProfile = () => {
    const [playerProfile, setPlayerProfileData] = useState(null);

    const TEAM_ONE = 'The Originals';
    const TEAM_TWO = 'Supersonic Sixers';
    const TEAM_THREE = 'Cool Crunchers';

    const TEAM_ONE_IMG = require('../../assets/images/teams/1.png');
    const TEAM_TWO_IMG = require('../../assets/images/teams/2.png');
    const TEAM_THREE_IMG = require('../../assets/images/teams/3.png');

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
                    <div className='row'>
                        <div className='col-4 d-flex flex-column mr-2'>
                            <div className='mb-5 '>
                                <h5 className=' text-white my-4'>
                                    NOW BIDDING FOR
                                </h5>
                                <h1 className=''>{playerProfile.name}</h1>
                                <div className=' player_info playerCat border text-white text-bold text-center px-6 rounded-5 border-orange bg-orange d-inline-block'>
                                    {playerProfile.player_category}
                                </div>
                            </div>
                            <div className='p-2 player_info'>
                                <small>Id</small>
                                <h4>
                                    {playerProfile.id < 10
                                        ? `0${playerProfile.id}`
                                        : playerProfile.id}
                                </h4>
                            </div>
                            <div className='p-2 player_info'>
                                <small>Batting Style</small>
                                <h4>{playerProfile.batting_Style}</h4>
                            </div>
                            <div className='p-2 player_info'>
                                <small>Bowling Style</small>
                                <h4>{playerProfile.bowling_Style}</h4>
                            </div>
                            <div className='p-2 player_info'>
                                <small>Category</small>
                                <h4>{playerProfile.category}</h4>
                            </div>
                        </div>
                        <div className='col-4 biddingPlayerImg'>
                            <img
                                src={
                                    playerProfile.photo != null &&
                                    playerProfile.photo !== ''
                                        ? `./images/players/${playerProfile.photo}`
                                        : `./images/players/1616252974.png`
                                }
                                alt='player profile'
                                className='biddingPlayerProfileImg '
                            />
                            {playerProfile.already_bidded ? (
                                <img
                                    src={soldOut}
                                    alt=''
                                    srcset=''
                                    className='soldOutImg'
                                />
                            ) : (
                                <img
                                    src={unsoldImg}
                                    alt=''
                                    srcset=''
                                    className='soldOutImg'
                                />
                            )}
                        </div>
                        <div className='col-4 d-flex flex-column justify-content-center'>
                            <div className='p-2 my-2 text-center biddingPriceBox'>
                                <p className='mb-0'>
                                    {playerProfile.already_bidded
                                        ? 'Sold Price'
                                        : 'Initial Bidding Price'}{' '}
                                </p>
                                <h2>
                                    $
                                    {playerProfile.already_bidded
                                        ? playerProfile.sold_price.toLocaleString()
                                        : playerProfile.base_price.toLocaleString(
                                              1000000000
                                          )}{' '}
                                </h2>
                            </div>
                            {playerProfile.already_bidded ? (
                                <div className='p-2 my-1 text-center'>
                                    <img
                                        src={
                                            playerProfile.sold_team === 1
                                                ? TEAM_ONE_IMG
                                                : playerProfile.sold_team === 2
                                                ? TEAM_TWO_IMG
                                                : TEAM_THREE_IMG
                                        }
                                        alt=''
                                        className='p-2 ownerTeamImg'
                                    />
                                    <h3 className='mt-2'>
                                        {playerProfile.sold_team === 1
                                            ? TEAM_ONE
                                            : playerProfile.sold_team === 2
                                            ? TEAM_TWO
                                            : TEAM_THREE}
                                    </h3>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </>
            ) : (
                <Animation />
            )}
        </>
    );
};

export default PlayerProfile;
