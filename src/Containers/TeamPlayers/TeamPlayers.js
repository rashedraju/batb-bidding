import { useState, useEffect } from 'react';
import React from 'react';
import './TeamProfile.css';
import Player from './Player/Player';
import axios from 'axios';
import { TEAM_PROFILE_PAGE } from '../../constant';
import Animation from '../Animation/Animation';

const TeamPlayers = () => {
    let [teamProfileData, setTeamProfileData] = useState(null);

    let colOnePlayer = [];
    let colTwoPlayer = [];

    teamProfileData?.players.forEach((player, i) => {
        let playerEl = (
            <Player
                player={player}
                colorCode={teamProfileData.team_details.color_code}
                sl={i + 1}
            />
        );
        if (teamProfileData.players.length / 2 > i) {
            colOnePlayer.push(playerEl);
        } else {
            colTwoPlayer.push(playerEl);
        }
    });

    useEffect(() => {
        const fetchTeamProfileData = setInterval(() => {
            try {
                axios.get(TEAM_PROFILE_PAGE).then((res) => {
                    console.log(res.data);
                    setTeamProfileData(res.data);
                });
            } catch (error) {
                console.log(error);
            }
        }, 2000);
        return () => {
            clearInterval(fetchTeamProfileData);
        };
    }, []);

    return (
        <>
            {teamProfileData ? (
                <>
                    <div
                        className='border bg-light shadow py-0 px-5 d-flex justify-content-between align-items-center rounded-3'
                        style={{
                            backgroundImage: `linear-gradient(45deg, ${teamProfileData.team_details.color_code}, #dfdfdf)`,
                        }}>
                        <div className='d-flex gap-5 align-items-center'>
                            <img
                                src={require(`../../assets/images/teams/${teamProfileData.team_details.id}.png`)}
                                alt=''
                                className='teamProfileTeamImg'
                                style={{ width: '5rem' }}
                            />
                            <div>
                                <h4 className='text-white'>
                                    {teamProfileData.team_details.team_name}
                                </h4>
                            </div>
                            <div className='d-flex gap-3'>
                                <div className='bat-bg-primary px-3 py-2 rounded-5 d-flex gap-3 align-items-center'>
                                    <h6 className='mb-0'>Total Players : </h6>
                                    <h6 className='mb-0'>
                                        {teamProfileData.players.length}
                                    </h6>
                                </div>
                                <div className='bat-bg-primary px-3 py-2 rounded-5 d-flex gap-3 align-items-center'>
                                    <h6 className='mb-0'>Category A : </h6>
                                    <h6 className='mb-0'>
                                        {teamProfileData.team_details.catA}
                                    </h6>
                                </div>
                                <div className='bat-bg-primary px-3 py-2 rounded-5 d-flex gap-3 align-items-center'>
                                    <h6 className='mb-0'>Category B : </h6>
                                    <h6 className='mb-0'>
                                        {teamProfileData.team_details.catB}
                                    </h6>
                                </div>
                                <div className='bat-bg-primary px-3 py-2 rounded-5 d-flex gap-3 align-items-center'>
                                    <h6 className='mb-0'>Category C : </h6>
                                    <h6 className='mb-0'>
                                        {teamProfileData.team_details.catC}
                                    </h6>
                                </div>
                                <div className='bat-bg-primary px-3 py-2 rounded-5 d-flex gap-3 align-items-center'>
                                    <h6 className='mb-0'>Used Credit : </h6>
                                    <h6 className='mb-0'>
                                        $
                                        {teamProfileData.team_details.used_credit.toLocaleString()}
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-4 d-flex gap-3'>
                        <table class='table text-white border'>
                            <thead>
                                <tr>
                                    <th>SL</th>
                                    <th>Name</th>
                                    <th>Photo</th>
                                    <th>Sold Price</th>
                                    <th>Category</th>
                                    <th>Player Category</th>
                                </tr>
                            </thead>
                            <tbody>{colOnePlayer}</tbody>
                        </table>
                        <table class='table text-white border'>
                            <thead>
                                <tr>
                                    <th>SL</th>
                                    <th>Name</th>
                                    <th>Photo</th>
                                    <th>Sold Price</th>
                                    <th>Category</th>
                                    <th>Player Category</th>
                                </tr>
                            </thead>
                            <tbody>{colTwoPlayer}</tbody>
                        </table>
                    </div>
                </>
            ) : (
                <Animation />
            )}
        </>
    );
};

export default TeamPlayers;
