import { AuthContext } from './AuthContext';

const initialContext = {
    id: 15,
};

export const AuthContextProvider = ({ children }) => {

    const authContextValue = {
        user: { name: 'john' },
        isLoggedIn: false,

        // methods
        signIn: () => {},
        signOut: () => {},
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};