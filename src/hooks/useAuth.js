import { useState } from "react";
import { findUser } from '../data/users';

export const useAuth = () => {
    const [userData, setUserData] = useState({ isLoggedIn: false, user: null  });

    const signIn = (username, password) => {
        const user = findUser(username);

        if (user) {
            const storeUser = { isLoggedIn: true, user: user };

            localStorage.setItem('auth', JSON.stringify(storeUser));

            setUserData(storeUser);

            return user;
        }

        return null;
    };

    const signOut = () => {
        localStorage.clear();
        setUserData({ isLoggedIn: false, user: null });
    };


    return {
        auth: userData,
        signIn,
        signOut,
    };
};
