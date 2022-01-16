import { useState, useEffect } from 'react';
import React from 'react';
import './TeamProfile.css';
import Player from './Player/Player';
import axios from 'axios';
import { TEAM_PROFILE_PAGE } from '../../constant';
import { checkFile } from '../../utils';
import anim from '../../assets/images/anim.gif';

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

    return (
        <>
            {teamProfileData ? (
                <>
                    <h1 className='text-center text-white my-4 pr-5'>
                        Team Details
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
                </>
            ) : (
                <img src={anim} alt='' className='loading-img mx-auto' />
            )}
        </>
    );
};

export default TeamProfile;
