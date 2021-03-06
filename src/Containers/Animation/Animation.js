import React from 'react';
import anim from '../../assets/images/anim.gif';
import logo from '../../assets/images/logo.png';
import turnamentLogo from '../../assets/images/main.png';

const Animation = () => {
    return (
        <>
            <header
                className='d-flex justify-content-between'
                style={{ zIndex: '9999', position: 'relative' }}>
                <img
                    src={turnamentLogo}
                    alt=''
                    className='turnamentLogo'
                    style={{
                        position: 'absolute',
                        top: '-9.5rem',
                    }}
                />
                <img
                    src={logo}
                    alt=''
                    className='batLogo'
                    style={{
                        position: 'absolute',
                        top: '-9.5rem',
                        right: '-5rem',
                    }}
                />
            </header>
            <img
                src={anim}
                alt=''
                className='loading-img mx-auto'
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                }}
            />
        </>
    );
};

export default Animation;
