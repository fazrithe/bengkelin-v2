import { AppBar, Box, Button, Grid, Hidden, IconButton, Toolbar, Typography } from "@mui/material"
import {FavoriteBorder, Chat, Share} from '@mui/icons-material'
import Link from "next/link"

export default function CartBuyMobile(){
    return(
        <>
        <Hidden only={['sm', 'lg']}>
         <AppBar position="fixed" color="secondary" sx={{ top: 'auto', bottom: 0 }}>
            <Toolbar>
                <Grid container>
                    <Grid item xs={2} sm={8}>
                        <Typography>Total</Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={8}>
                        <Typography fontWeight="bold">RP. 70.000</Typography>
                    </Grid>
                </Grid>
                <Link href="/cart/shipment">
                    <Button variant="outlined" color="secondary" style={{backgroundColor: "white", width:"50%"}} className="ml-2">Beli</Button>
                </Link>
            </Toolbar> 
        </AppBar>
        </Hidden>
        </>
    )
}