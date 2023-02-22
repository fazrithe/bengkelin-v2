import { Container, Grid, Typography, Checkbox, Divider, ListItemText, Button } from "@mui/material"
import Image from "next/image"
import ImageProduct from "@/public/products/helmkyp.jpg"
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import React, { useState } from "react";

export default function CartDetail(){
    let [count, setCount] = useState(0)

    function incrementCount() {
        count = count + 1;
        setCount(count);
    }
    function decrementCount() {
        count = count - 1;
        setCount(count);
    }

    return(
        <>
            <Typography variant="h6">Keranjang</Typography>
            <Grid container>
                <Grid item xs={2} sm={0.7}>
                    <Checkbox/>
                </Grid>
                <Grid item xs={6} sm={8} paddingTop={1.2}>
                    <Typography>Pilih Semua</Typography>
                </Grid>
                <Grid item xs={2} sm={2} padding={1.2}>
                    <Typography color="secondary">Hapus</Typography>
                </Grid>
            </Grid>
            <Divider/>
            <Grid container>
                <Grid item xs={2} sm={0.7} paddingTop={1}>
                    <Checkbox/>
                </Grid>
                <Grid item xs={6} sm={8} paddingTop={1.2}>
                    <Typography fontWeight="bold">Aji Motor</Typography>
                    <Typography variant="caption" color="text.secondary">Jakarta Barat</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={2} sm={0.7} paddingTop={1}>
                    <Checkbox/>
                </Grid>
                <Grid item xs={4} sm={2} paddingTop={1}>
                    <Image src={ImageProduct}  alt="Helem KYT" width={100} />
                </Grid>
                <Grid item xs={6} sm={9} paddingTop={1.2}>
                    <Grid container>
                        <Grid item xs={8} sm={10}>
                            <Typography>Helem KYT</Typography>
                            <Typography variant="caption" color="text.secondary">Putih</Typography>
                        </Grid>      
                        <Grid item xs={3} sm={2}>
                            |<DeleteOutlinedIcon/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container paddingTop={1}>
                <Grid item xs={2} sm={0.7}></Grid>
                <Grid item xs={3} sm={7}>
                    <Typography variant="caption" color="secondary">Tulis Catatan Catatan</Typography>
                </Grid>
                <Grid item xs={6} sm={4} paddingBottom={1}>
                    <Grid container>
                        <Grid item xs={8} sm={8}>
                            <Grid container spacing={3}>
                                <Grid item xs={7} sm={5}>
                                    <Button variant="outlined" size="small" color="secondary" onClick={decrementCount}>
                                        <Typography fontWeight="bold">-</Typography>
                                    </Button>
                                </Grid>
                                <Grid item xs={1} sm={1} padding={1}>
                                    <Typography fontWeight="bold" color="secondary">{count}</Typography>
                                </Grid>
                                <Grid item xs={2} sm={5}>
                                    <Button variant="outlined" size="small" color="secondary" onClick={incrementCount}>
                                        <Typography fontWeight="bold">+</Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        <Divider/>
        <Grid container>
                <Grid item xs={2} sm={0.7} paddingTop={1}>
                    <Checkbox/>
                </Grid>
                <Grid item xs={6} sm={8} paddingTop={1.2}>
                    <Typography fontWeight="bold">Aji Motor</Typography>
                    <Typography variant="caption" color="text.secondary">Jakarta Barat</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={2} sm={0.7} paddingTop={1}>
                    <Checkbox/>
                </Grid>
                <Grid item xs={4} sm={2} paddingTop={1}>
                    <Image src={ImageProduct}  alt="Helem KYT" width={100} />
                </Grid>
                <Grid item xs={6} sm={9} paddingTop={1.2}>
                    <Grid container>
                        <Grid item xs={8} sm={10}>
                            <Typography>Helem KYT</Typography>
                            <Typography variant="caption" color="text.secondary">Putih</Typography>
                        </Grid>      
                        <Grid item xs={3} sm={2}>
                            |<DeleteOutlinedIcon/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container paddingTop={1}>
                <Grid item xs={2} sm={0.7}></Grid>
                <Grid item xs={3} sm={7}>
                    <Typography variant="caption" color="secondary">Tulis Catatan Catatan</Typography>
                </Grid>
                <Grid item xs={6} sm={4} paddingBottom={1}>
                    <Grid container>
                        <Grid item xs={8} sm={8}>
                            <Grid container spacing={3}>
                                <Grid item xs={7} sm={5}>
                                    <Button variant="outlined" size="small" color="secondary" onClick={decrementCount}>
                                        <Typography fontWeight="bold">-</Typography>
                                    </Button>
                                </Grid>
                                <Grid item xs={1} sm={1} padding={1}>
                                    <Typography fontWeight="bold" color="secondary">{count}</Typography>
                                </Grid>
                                <Grid item xs={2} sm={5}>
                                    <Button variant="outlined" size="small" color="secondary" onClick={incrementCount}>
                                        <Typography fontWeight="bold">+</Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        <Divider/>
        <Grid container>
                <Grid item xs={2} sm={0.7} paddingTop={1}>
                    <Checkbox/>
                </Grid>
                <Grid item xs={6} sm={8} paddingTop={1.2}>
                    <Typography fontWeight="bold">Aji Motor</Typography>
                    <Typography variant="caption" color="text.secondary">Jakarta Barat</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={2} sm={0.7} paddingTop={1}>
                    <Checkbox/>
                </Grid>
                <Grid item xs={4} sm={2} paddingTop={1}>
                    <Image src={ImageProduct}  alt="Helem KYT" width={100} />
                </Grid>
                <Grid item xs={6} sm={9} paddingTop={1.2}>
                    <Grid container>
                        <Grid item xs={8} sm={10}>
                            <Typography>Helem KYT</Typography>
                            <Typography variant="caption" color="text.secondary">Putih</Typography>
                        </Grid>      
                        <Grid item xs={3} sm={2}>
                            |<DeleteOutlinedIcon/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container paddingTop={1}>
                <Grid item xs={2} sm={0.7}></Grid>
                <Grid item xs={3} sm={7}>
                    <Typography variant="caption" color="secondary">Tulis Catatan Catatan</Typography>
                </Grid>
                <Grid item xs={6} sm={4} paddingBottom={1}>
                    <Grid container>
                        <Grid item xs={8} sm={8}>
                            <Grid container spacing={3}>
                                <Grid item xs={7} sm={5}>
                                    <Button variant="outlined" size="small" color="secondary" onClick={decrementCount}>
                                        <Typography fontWeight="bold">-</Typography>
                                    </Button>
                                </Grid>
                                <Grid item xs={1} sm={1} padding={1}>
                                    <Typography fontWeight="bold" color="secondary">{count}</Typography>
                                </Grid>
                                <Grid item xs={2} sm={5}>
                                    <Button variant="outlined" size="small" color="secondary" onClick={incrementCount}>
                                        <Typography fontWeight="bold">+</Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        <Divider/>
        </>
    )
}