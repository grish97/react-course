import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';


export const PrivateRoutes = () => {
    const { auth } = useAuth();

    return auth.isLoggedIn 
        ? <Outlet />
        : <Navigate to='/signin' />;
};