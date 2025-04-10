import { Outlet, Navigate } from 'react-dom';
import { useAuth } from '../hooks/useAuth';


export const PublicRoutes = () => {
    const { isLoggedIn } = useAuth();

    return isLoggedIn
        ? <Navigate to='/' />
        : <Outlet />;
};