import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';


export const PublicRoutes = () => {
    const { auth } = useAuth();

    return auth.isLoggedIn
        ? <Navigate to='/' />
        : <Outlet />;
};