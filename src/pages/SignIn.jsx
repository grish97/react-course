import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
    const navigate = useNavigate();

    const { signIn } = useAuth();

    const [username, setUserName] = useState('john_doe91');
    const [password, setPassword] = useState('');

    const onChangeUsername = (event) => {
        setUserName(event.target.value);
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSignIn = () => {
        const auth = signIn(username, password);

        if (auth) {
            navigate('/');

            return;
        }

        alert('User with credentials does not exist');
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