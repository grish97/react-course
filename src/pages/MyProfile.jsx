import { Grid2, Box, Typography, Card } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from '../context/auth/AuthContext';

export const MyProfile = () => {
    const { user } = useContext(AuthContext);

    return (
        <Grid2 container sx={{ width: '100%' }} spacing={0.5}>
            <Box sx={{ width: '13%' }}>
                <Card>
                    <img src={user.image} />
                </Card>
            </Box>

            <Box sx={{ width: '85%' }} >
                <Card sx={{ padding: '15px' }}>
                    <Typography variant="h5">{user.firstName} {user.lastName}</Typography>

                    <Typography>
                        Address: {user.address.country} {user.address.city} {user.address.street} 
                    </Typography>
                </Card>
            </Box>
        </Grid2>
    );
};