import React, { useState, useEffect } from 'react';
import './Bidding.css';
import axios from 'axios';
import { BIDDING_PAGE } from '../../constant';
import Animation from '../Animation/Animation';
import soldOut from '../../assets/images/sold-2.png';

const Bidding = () => {
    const [biddingData, setBiddingData] = useState(null);
    const TEAM_ONE = 'The Originals';
    const TEAM_TWO = 'Supersonic Sixers';
    const TEAM_THREE = 'Cool Crunchers';

    const TEAM_ONE_IMG = require('../../assets/images/teams/1.png');
    const TEAM_TWO_IMG = require('../../assets/images/teams/2.png');
    const TEAM_THREE_IMG = require('../../assets/images/teams/3.png');

    useEffect(() => {
        const fetchBiddingData = setInterval(() => {
            try {
                axios.get(BIDDING_PAGE).then((res) => {
                    console.log(res.data);
                    setBiddingData(res.data);
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
            {biddingData ? (
                <div className='biddingScreeen'>
                    <div className='row'>
                        <div className='col-4 d-flex flex-column mr-2'>
                            <div className='mb-5 '>
                                <h5 className=' text-white my-4'>
                                    NOW BIDDING FOR
                                </h5>
                                <h1 className=''>{biddingData.name}</h1>
                                <div className=' player_info playerCat border text-white text-bold text-center px-6 rounded-5 border-orange bg-orange d-inline-block'>
                                    {biddingData.player_category}
                                </div>
                            </div>
                            <div className='p-2 player_info'>
                                <small>Id</small>
                                <h4>
                                    {biddingData.id < 10
                                        ? `0${biddingData.id}`
                                        : biddingData.id}
                                </h4>
                            </div>
                            <div className='p-2 player_info'>
                                <small>Batting Style</small>
                                <h4>{biddingData.batting_Style}</h4>
                            </div>
                            <div className='p-2 player_info'>
                                <small>Bowling Style</small>
                                <h4>{biddingData.bowling_Style}</h4>
                            </div>
                            <div className='p-2 player_info'>
                                <small>Category</small>
                                <h4>{biddingData.category}</h4>
                            </div>
                        </div>
                        <div className='col-4 biddingPlayerImg'>
                            <img
                                src={
                                    biddingData.photo != null &&
                                    biddingData.photo !== ''
                                        ? `./images/players/${biddingData.photo}`
                                        : `./images/players/1616252974.png`
                                }
                                alt='player profile'
                                className='biddingPlayerProfileImg '
                            />
                            {biddingData.already_bidded && (
                                <img
                                    src={soldOut}
                                    alt=''
                                    srcset=''
                                    className='soldOutImg'
                                />
                            )}
                        </div>
                        <div className='col-4 d-flex flex-column justify-content-evenly'>
                            <div className='p-2 my-2 text-center biddingPriceBox'>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <div className='biddingPriceConetent'></div>
                                <p className='mb-0'>
                                    {biddingData.already_bidded
                                        ? 'Sold Price'
                                        : 'Initial Bidding Price'}{' '}
                                </p>
                                <h2>
                                    $
                                    {biddingData.already_bidded
                                        ? biddingData.sold_price.toLocaleString()
                                        : biddingData.base_price.toLocaleString(
                                              1000000000
                                          )}{' '}
                                </h2>
                            </div>
                            {biddingData.already_bidded ? (
                                <div className='p-2 my-1 text-center'>
                                    <img
                                        src={
                                            biddingData.sold_team === 1
                                                ? TEAM_ONE_IMG
                                                : biddingData.sold_team === 2
                                                ? TEAM_TWO_IMG
                                                : TEAM_THREE_IMG
                                        }
                                        alt=''
                                        className='p-2 ownerTeamImg'
                                    />
                                    <h3 className='mt-2'>
                                        {biddingData.sold_team === 1
                                            ? TEAM_ONE
                                            : biddingData.sold_team === 2
                                            ? TEAM_TWO
                                            : TEAM_THREE}
                                    </h3>
                                </div>
                            ) : (
                                <div className='p-2 my-1 d-flex gap-3 align-items-center mt-4 text-center biddingStatusBox'>
                                    <h1 className='biddingStatus'>
                                        Bidding is Going On..
                                        <div className='lds-ripple'>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </h1>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <Animation />
            )}
        </>
    );
};

export default Bidding;
