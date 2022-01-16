import { useState, useEffect } from 'react';
import React from 'react';
import './TeamProfile.css';
import Player from './Player/Player';
import axios from 'axios';
import { TEAM_PROFILE_PAGE } from '../../constant';
import anim from '../../assets/images/anim.gif';
import teamOneImg from '../../assets/images/teams/1.png';
import teamTwoImg from '../../assets/images/teams/2.png';
import teamThreeImg from '../../assets/images/teams/3.png';

const TeamProfile = () => {
    let [teamProfileData, setTeamProfileData] = useState({
        team_details: {
            id: 2,
            team_name: 'Supersonic Sixers',
            logo: null,
            color_code: '#1B40AB',
            credit: 222,
            used_credit: 0,
        },
        players: new Array(12).fill({
            id: 7,
            name: 'Jasarat Al Atun',
            age: null,
            photo: null,
            designation: 'Procurement Officer - Indirects',
            department: 'Procurement',
            player_category: 'Bowler',
            batting_Style: 'Right Handed',
            bowling_Style: 'Right Arm Medium Fast',
            category: 'C',
            base_price: 50000,
            already_bidded: 0,
            sold_team: 1,
            sold_price: 0,
        }),
    });

    const playerEl = teamProfileData?.players.map((player) => (
        <Player player={player} />
    ));

    useEffect(() => {
        // const fetchTeamProfileData = setInterval(() => {
        //     try {
        //         axios.get(TEAM_PROFILE_PAGE).then((res) => {
        //             console.log(res.data);
        //             setTeamProfileData(res.data);
        //         });
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }, 2000);
        // return () => {
        //     clearInterval(fetchTeamProfileData);
        // };
    }, []);

    let backgroundImage = null;
    if (teamProfileData?.team_details.id === 1) {
        backgroundImage = teamOneImg;
    } else if (teamProfileData?.team_details.id === 2) {
        backgroundImage = teamTwoImg;
    } else if (teamProfileData?.team_details.id === 3) {
        backgroundImage = teamThreeImg;
    }

    return (
        <>
            {teamProfileData ? (
                <>
                    <h1 className='text-center text-white my-4 pr-5'>
                        {teamProfileData.team_details.team_name}
                    </h1>
                    <div className='border bg-light shadow p-3 d-flex justify-content-between align-items-center rounded-3'>
                        <div className='d-flex gap-5 align-items-center'>
                            <img
                                src={require(`../../assets/images/teams/${teamProfileData.team_details.id}.png`)}
                                alt=''
                                className='teamProfileTeamImg'
                            />
                            <div>
                                <h4 className='bat-primary'>
                                    {teamProfileData.team_details.team_name}
                                </h4>
                                <h4 className='bat-primary'>
                                    #{teamProfileData.team_details.id}
                                </h4>
                            </div>
                        </div>
                        <div className='d-flex gap-4'>
                            <div>
                                <p className='text-center bat-primary mb-0'>
                                    Total Players
                                </p>
                                <h3 className='px-3 py-1 text-white text-center text-bold rounded-5 w-150 bat-bg-primary ls-1-3 w-100'>
                                    {teamProfileData.players.length}
                                </h3>
                            </div>
                            <div>
                                <p className='text-center bat-primary mb-0'>
                                    Used Credit
                                </p>
                                <h3 className='px-3 py-1 text-white text-center text-bold rounded-5 w-150 bat-bg-primary ls-1-3 w-100'>
                                    ${teamProfileData.team_details.used_credit}
                                </h3>
                            </div>
                            <div>
                                <p className='text-center bat-primary mb-0'>
                                    Current Credit
                                </p>
                                <h3 className='px-3 py-1 text-white text-center text-bold rounded-5 w-150 bat-bg-primary ls-1-3 w-100'>
                                    $
                                    {teamProfileData.team_details.credit -
                                        teamProfileData.team_details
                                            .used_credit}
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className='mt-4 d-flex flex-wrap justify-content-center gap-3'>
                        {playerEl}
                    </div>
                    <img
                        src={backgroundImage}
                        alt=''
                        className='teamProfileBg'
                    />
                </>
            ) : (
                <img src={anim} alt='' className='loading-img mx-auto' />
            )}
        </>
    );
};

export default TeamProfile;
