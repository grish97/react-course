import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/auth/AuthContext';

import LogoutIcon from '../assets/logout.svg'
import { AppBar } from '@mui/material';

export const Navbar = () => {
    const { signOut } = useContext(AuthContext);

    return (
        <AppBar>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/images'>Shorts</Link>
                    </li>
                    <li>
                        <Link to='/subscriptions'>Subscribtions</Link>
                    </li>

                    <li>
                      <img
                        className='logout'
                        src={LogoutIcon}
                        alt="Logout icon"
                        onClick={signOut}
                       />
                    </li>
                </ul>
            </AppBar>
    );
};