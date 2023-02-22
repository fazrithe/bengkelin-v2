import { Button, Grid, Typography } from "@mui/material"
import ImageProduct from "@/public/products/helmkyp.jpg"
import Image from "next/image"
import ShipmentCourier from "./ShipmentCourier"

export default function ShipmentOrder(){
    return(
        <>
            <Grid item xs={12} sm={7}>
                <Grid container>
                    <Grid item xs={4} sm={3}>
                        <Image src={ImageProduct}  alt="Helem KYP" width={100} />
                    </Grid>          
                    <Grid item xs={6} sm={4}>
                        <Typography>Helem KYT</Typography>
                        <Typography variant="caption" color="text.secondary">Putih 1 Barang (14 gr)</Typography>
                        <Typography fontWeight="bold">Rp. 151.800</Typography>
                    </Grid>
                </Grid>    
            </Grid>
            <Grid item xs={4} sm={5}>
                <ShipmentCourier/>
            </Grid>
        </>
    )
}