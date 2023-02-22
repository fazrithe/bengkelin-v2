import * as React from 'react';
import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Home, Diversity3, BuildCircle, Favorite, Assignment } from '@mui/icons-material';

export default function NavbarBottom(){
    const [value, setValue] = React.useState(0);

    return(
        <>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
            >

                <BottomNavigationAction label="Home" icon={<Home color="secondary"/>} />
                <BottomNavigationAction label="Komunitas" icon={<Diversity3 color="secondary"/>} />
                <BottomNavigationAction label="Bengkel" icon={<BuildCircle color="secondary" />} />
                <BottomNavigationAction label="Wishlist" icon={<Favorite color="secondary"/>} />
                <BottomNavigationAction label="Transaksi" icon={<Assignment color="secondary"/>} />
            </BottomNavigation>
        </Paper>
        </>
    )
}