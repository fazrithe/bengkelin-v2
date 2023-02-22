import ShipmentOrder from "@/components/product/cart/shipment/ShipmentOrder";
import { Container, Grid, Typography, Divider, Button } from "@mui/material";
import { sizing } from "@mui/system";

export default function Shipment(){
    return(
        <>
        <Container fixed>
            <Grid container paddingTop={4}>
                <Grid item xs={12} sm={8}>
                    <Typography variant="h6">Checkout</Typography>
                    <Typography paddingTop={3} paddingBottom={1} fontWeight="bold">Alamat Pengiriman</Typography>
                    <Divider/>
                    <Grid container spacing={2} paddingTop={1}>
                        <Grid item>
                            <Typography fontWeight="bold">Moh. Dede Fazri</Typography>
                        </Grid>
                        <Grid item>
                            <Typography>(Kp. Ciputih RT.006 Rw.006)</Typography>
                        </Grid>
                    </Grid>
                    <Grid container paddingTop={1}>
                        <Grid item>
                            <Typography>08728129032</Typography>
                        </Grid>
                    </Grid>
                    <Grid container paddingTop={1} paddingBottom={1}>
                        <Grid item>
                            <Typography variant="body2">Kp. Ciputih RT.006 RW.006, Desa Geredug, Kec. Bojong</Typography>
                        </Grid>
                    </Grid>
                    <Divider/>
                    <Grid container paddingTop={1} paddingBottom={1}>
                        <Grid item>
                            <Button variant="outlined" color="secondary">Pilih Alamat Lain</Button>
                        </Grid>
                    </Grid>
                    <Divider/>
                    <Grid container paddingTop={1} paddingBottom={1}>
                        <Grid item>
                            <Typography fontWeight="bold">Aji Motor</Typography>
                            <Typography variant="caption">Jakarta Barat</Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <ShipmentOrder/>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={4}>
                    Test
                </Grid>
            </Grid>
        </Container>
        </>
    )
}