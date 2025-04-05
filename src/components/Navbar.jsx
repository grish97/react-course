import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/auth/AuthContext';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';

import { AppBar, Button, Box, Typography } from '@mui/material';

const pages = [
    { text: 'Home', link: '/' },
    { text: 'Images', link: '/images' },
    { text: 'Subscriptions', link: '/subscriptions' },
    { text: 'Products', link: '/products' },
    { text: 'Users', link: '/users' },
];

export const Navbar = () => {
    const navigate = useNavigate();

    const { signOut, user } = useContext(AuthContext);

    const handlePageChange = (link) => {
        navigate(link);
    };

    return (
        <AppBar sx={{ px: '8px' }}>
             <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex' }}>
                    {pages.map((page) => (
                        <Button
                            key={page.text}
                            onClick={() => handlePageChange(page.link)}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {page.text}
                        </Button>
                    ))}
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <PersonIcon sx={{ cursor: 'pointer' }} onClick={() => navigate('/my-profile')} />

                    <LogoutIcon sx={{ marginLeft: '16px', cursor: 'pointer' }} color='white' onClick={signOut} />
                </Box>
            </Box>
        </AppBar>
    );
};