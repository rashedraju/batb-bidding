import { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/images/logo.png';
import turnamentLogo from './assets/images/main.png';
import PlayerLists from './Containers/PlayerList/PlayerLists';
import PlayerProfile from './Containers/PlayerProfile/PlayerProfile';
import TeamProfile from './Containers/TeamProfile/TeamProfile';
import Bidding from './Containers/Bidding/Bidding';
import axios from 'axios';
import { CURRENT_PAGE } from './constant';
import Animation from './Containers/Animation/Animation';
import AllTeamDetails from './Containers/AllTeamDetails/AllTeamDetails';

function App() {
    let [currentPage, setCurrentPage] = useState(0);

    let currentPageEl = <Animation />;

    if (currentPage === 0) {
        currentPageEl = <Animation />;
    } else if (currentPage === 1) {
        currentPageEl = <Bidding />;
    } else if (currentPage === 2) {
        currentPageEl = <TeamProfile />;
    } else if (currentPage === 3) {
        currentPageEl = <PlayerLists />;
    } else if (currentPage === 4) {
        currentPageEl = <PlayerProfile />;
    }

    useEffect(() => {
        const fetchCurrentPage = setInterval(() => {
            try {
                axios.get(CURRENT_PAGE).then((res) => {
                    setCurrentPage(res.data.current_page);
                });
            } catch (error) {
                console.log(error);
            }
        }, 2000);
        return () => {
            clearInterval(fetchCurrentPage);
        };
    }, []);

    return (
        <div className='App'>
            <header className='d-flex justify-content-between'>
                <img src={turnamentLogo} alt='' className='turnamentLogo' />
                <img src={logo} alt='' className='batLogo' />
            </header>

            {currentPageEl}
            {/* <TeamProfile /> */}
        </div>
    );
}

export default App;
