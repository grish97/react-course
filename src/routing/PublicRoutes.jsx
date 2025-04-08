import { Outlet, Navigate } from 'react-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/auth/AuthContext';


export const PublicRoutes = () => {
    const { isLoggedIn } = useContext(AuthContext)

    return !isLoggedIn
        ? <Outlet />
        : <Navigate to="/" />
};