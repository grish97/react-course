import { useEffect, useState } from "react";
import { findUser } from '../data/users';

export const useAuth = () => {
    const [auth, setAuth] = useState({ isLoggedIn: false, user: null  });

    // useEffect(() => {
    //     const loggedUser = localStorage.getItem('auth');

    //     if (loggedUser) {
    //         setUserData(JSON.parse(loggedUser));
    //     }
    // }, []);

    const signIn = (username, password) => {
        const user = findUser(username);

        if (user) {
            const storeUser = { isLoggedIn: true, user: user };

            localStorage.setItem('auth', JSON.stringify(storeUser));

            setAuth(storeUser);

            return user;
        }

        return null;
    };

    const signOut = () => {
        localStorage.clear();
        setAuth({ isLoggedIn: false, user: null });
    };


    return {
        auth,
        signIn,
        signOut,
    };
};
