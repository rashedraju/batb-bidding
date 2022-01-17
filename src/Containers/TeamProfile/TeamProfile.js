import { useState, useEffect } from 'react';
import React from 'react';
import './TeamProfile.css';
import Player from './Player/Player';
import axios from 'axios';
import { TEAM_PROFILE_PAGE } from '../../constant';
import Animation from '../Animation/Animation';
import teamOneImg from '../../assets/images/teams/1.png';
import teamTwoImg from '../../assets/images/teams/2.png';
import teamThreeImg from '../../assets/images/teams/3.png';

const TeamProfile = () => {
    let [teamProfileData, setTeamProfileData] = useState(null);

    const playerEl = teamProfileData?.players.map((player) => (
        <Player player={player} />
    ));

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
                    <div
                        className='border bg-light shadow p-3 px-5 d-flex justify-content-between align-items-center rounded-3'
                        style={{
                            backgroundImage: `linear-gradient(45deg, ${teamProfileData.team_details.color_code}, #dfdfdf)`,
                        }}>
                        <div className='d-flex gap-5 align-items-center'>
                            <img
                                src={require(`../../assets/images/teams/${teamProfileData.team_details.id}.png`)}
                                alt=''
                                className='teamProfileTeamImg'
                            />
                            <div>
                                <h4 className='text-white'>
                                    {teamProfileData.team_details.team_name}
                                </h4>
                                <div className='d-flex gap-3'>
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
                                </div>
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
                                <h3 className='px-3 py-1 text-white text-center text-bold rounded-5 w-150 bg-danger ls-1-3 w-100'>
                                    $
                                    {teamProfileData.team_details.used_credit.toLocaleString()}
                                </h3>
                            </div>
                            <div>
                                <p className='text-center bat-primary mb-0'>
                                    Current Credit
                                </p>
                                <h3 className='px-3 py-1 text-white text-center text-bold rounded-5 w-150 bg-success ls-1-3 w-100'>
                                    $
                                    {(
                                        teamProfileData.team_details.credit -
                                        teamProfileData.team_details.used_credit
                                    ).toLocaleString()}
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
                <Animation />
            )}
        </>
    );
};

export default TeamProfile;
