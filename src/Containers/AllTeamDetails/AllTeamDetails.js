import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { ALL_TEAM_DETAILS } from '../../constant';
import Animation from '../Animation/Animation';

const TeamProfile = () => {
    let [allTeamDetails, setAllTeamDetails] = useState(null);

    useEffect(() => {
        const fetchTeamProfileData = setInterval(() => {
            try {
                axios.get(ALL_TEAM_DETAILS).then((res) => {
                    console.log(res.data);
                    setAllTeamDetails(res.data);
                });
            } catch (error) {
                console.log(error);
            }
        }, 2000);
        return () => {
            clearInterval(fetchTeamProfileData);
        };
    }, []);

    let allTeamDetailsEl = <Animation />;

    if (allTeamDetails) {
        allTeamDetailsEl = allTeamDetails.map((teamDetails) => (
            <div
                className='border bg-light shadow p-3 px-5 d-flex justify-content-between align-items-center rounded-3 mt-5'
                style={{
                    backgroundImage: `linear-gradient(45deg, ${teamDetails.team.color_code}, #dfdfdf)`,
                }}>
                <div className='d-flex gap-5 align-items-center'>
                    <img
                        src={require(`../../assets/images/teams/${teamDetails.team.id}.png`)}
                        alt=''
                        className='teamProfileTeamImg'
                    />
                    <div>
                        <h4 className='text-white'>
                            {teamDetails.team.team_name}
                        </h4>
                        <div className='d-flex gap-3'>
                            <div className='bat-bg-primary px-3 py-2 rounded-5 d-flex gap-3 align-items-center'>
                                <h6 className='mb-0'>Category A : </h6>
                                <h6 className='mb-0'>
                                    {teamDetails.categories.a}
                                </h6>
                            </div>
                            <div className='bat-bg-primary px-3 py-2 rounded-5 d-flex gap-3 align-items-center'>
                                <h6 className='mb-0'>Category B : </h6>
                                <h6 className='mb-0'>
                                    {teamDetails.categories.b}
                                </h6>
                            </div>
                            <div className='bat-bg-primary px-3 py-2 rounded-5 d-flex gap-3 align-items-center'>
                                <h6 className='mb-0'>Category C : </h6>
                                <h6 className='mb-0'>
                                    {teamDetails.categories.c}
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
                            {teamDetails.categories.a +
                                teamDetails.categories.b +
                                teamDetails.categories.c}
                        </h3>
                    </div>
                    <div>
                        <p className='text-center bat-primary mb-0'>
                            Used Credit
                        </p>
                        <h3 className='px-3 py-1 text-white text-center text-bold rounded-5 w-150 bg-danger ls-1-3 w-100'>
                            ${teamDetails.team.used_credit.toLocaleString()}
                        </h3>
                    </div>
                    <div>
                        <p className='text-center bat-primary mb-0'>
                            Current Credit
                        </p>
                        <h3 className='px-3 py-1 text-white text-center text-bold rounded-5 w-150 bg-success ls-1-3 w-100'>
                            $
                            {(
                                teamDetails.team.credit -
                                teamDetails.team.used_credit
                            ).toLocaleString()}
                        </h3>
                    </div>
                </div>
            </div>
        ));
    }

    return <div className='d-flex flex-column gap-3'>{allTeamDetailsEl}</div>;
};

export default TeamProfile;
