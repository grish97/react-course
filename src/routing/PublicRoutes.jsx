import { Outlet, Navigate } from 'react-dom';
import { useAuth } from '../hooks/useAuth';


export const PublicRoutes = () => {
    const { auth } = useAuth();

    console.log({
        public: auth.isLoggedIn,
    });

    return !auth.isLoggedIn && <Outlet />;
};