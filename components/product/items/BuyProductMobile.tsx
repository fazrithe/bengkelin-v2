import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material"
import {FavoriteBorder, Chat, Share} from '@mui/icons-material'
import Link from "next/link"

export default function BuyProductMobile(){
    return(
        <>
        <AppBar position="fixed" color="secondary" sx={{ top: 'auto', bottom: 0 }}>
            <Toolbar>
                <IconButton  color="inherit" aria-label="open drawer">
                    <Chat/>
                </IconButton>
                <Button variant="outlined" color="secondary" style={{backgroundColor: "white", width:"50%"}}>+ Keranjang</Button>
                <Box sx={{ flexGrow: 1 }}/>
                <Link href="/cart/shipment">
                    <Button variant="outlined" color="secondary" style={{backgroundColor: "white", width:"50%"}} className="ml-2">Beli</Button>
                </Link>
            </Toolbar> 
        </AppBar>
        </>
    )
}