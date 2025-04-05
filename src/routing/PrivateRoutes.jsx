import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';


export const PrivateRoutes = () => {
    const { auth } = useAuth();

    console.log({
        private: auth.isLoggedIn,
    });

    return auth.isLoggedIn && <Outlet />;
};