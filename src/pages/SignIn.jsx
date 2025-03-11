import { useState } from 'react';

export const SignIn = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const onChangeUsername = (event) => {
        setUserName(event.target.value);
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSignIn = () => {
       // find user by username

       // save found user data into local storage

       // naviagte home page
    };

    return (
        <div>
            <h2>Sign In</h2>

            <div>
                <input
                    value={username}
                    onChange={onChangeUsername}
                    type="text"
                    placeholder="Username"
                />
            </div>

            <div>
                <input 
                    value={password} 
                    onChange={onChangePassword} 
                    type="password" 
                    placeholder="Password"
                />
            </div>

            <button onClick={handleSignIn}>Sign In</button>
        </div>
    );
};