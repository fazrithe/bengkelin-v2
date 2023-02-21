import { Container, Grid } from "@mui/material"
import CartDetail from "@/components/product/cart/CartDetail"
import CartBuy from "@/components/product/cart/CartBuy"

export default function Cart(){
    return(
        <>
        <Container fixed>
        <Grid container paddingTop={2}>
            <Grid item xs={12} sm={8}>
                <CartDetail/>
            </Grid>
            <Grid item xs={8} sm={4}>
                <CartBuy/>
            </Grid>
        </Grid>
        </Container>
        </>
    )
}