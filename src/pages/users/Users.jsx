import { Grid2, Box } from '@mui/material';
import { useState, useEffect } from "react";


export const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then((usersResponse) => {
                setUsers(usersResponse.users);
            });
    }, []);

    return (
        <Grid2 container spacing={2}>
            {users.map(
                (user) => (
                    <Grid2 key={user.id}>
                        <img src={user.image} alt="User image" />
                        <p>{user.firstName} {user.lastName}</p>
                    </Grid2>
                )
            )}
        </Grid2>
    )
}