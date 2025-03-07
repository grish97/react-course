import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';


export const PrivateRoutes = () => {
    const { isLoggedIn } = useAuth();

    return isLoggedIn 
        ? <Outlet />
        : <Navigate to='/signin' />;
};