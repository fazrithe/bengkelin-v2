import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Chip } from '@mui/material';
import { red } from '@mui/material/colors';
import Link from 'next/link';
const classes = {
    root: {
      flexGrow: 1
    },
    paper: {
      padding: 20,
      textAlign: "center",
      color: "#b43fd4",
      fontFamily: "Roboto"
    }
  };

export default function CartRecomProduct(){
  return(
    <>
    <Grid container paddingTop={2} paddingBottom={2}>
        <Grid item>
            <Typography fontWeight="bold" variant="h6">Rekomendasi Produk</Typography>
        </Grid>
    </Grid>
    <Grid container>
        <Grid item xs={6} sm={2.9}>
        <Link 
        href="/product/[name]" 
        as={`/product/helmKYP`}
        >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/products/helmKYP.jpg"
                  alt="helm KYP"
                />
                <CardContent>
                  <Typography>helm KYP</Typography>
                  <Typography gutterBottom fontWeight="bold" component="div">
                    <Chip label="26%" size="small" color="secondary" className="mr-2"></Chip>
                    Rp. 70.000
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        </Link>
        </Grid>
        <Grid item xs={6} sm={2.9}>
        <Link 
        href="/product/[name]" 
        as={`/product/helmKYP`}
        >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/products/helmKYP.jpg"
                  alt="helm KYP"
                />
                <CardContent>
                  <Typography>helm KYP</Typography>
                  <Typography gutterBottom fontWeight="bold" component="div">
                    <Chip label="26%" size="small" color="secondary" className="mr-2"></Chip>
                    Rp. 70.000
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        </Link>
        </Grid>
        <Grid item xs={6} sm={2.9}>
        <Link 
        href="/product/[name]" 
        as={`/product/helmKYP`}
        >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/products/helmKYP.jpg"
                  alt="helm KYP"
                />
                <CardContent>
                  <Typography>helm KYP</Typography>
                  <Typography gutterBottom fontWeight="bold" component="div">
                    <Chip label="26%" size="small" color="secondary" className="mr-2"></Chip>
                    Rp. 70.000
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        </Link>
        </Grid>
        <Grid item xs={6} sm={2.9}>
        <Link 
        href="/product/[name]" 
        as={`/product/helmKYP`}
        >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/products/helmKYP.jpg"
                  alt="helm KYP"
                />
                <CardContent>
                  <Typography>helm KYP</Typography>
                  <Typography gutterBottom fontWeight="bold" component="div">
                    <Chip label="26%" size="small" color="secondary" className="mr-2"></Chip>
                    Rp. 70.000
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        </Link>
        </Grid>
        <Grid item xs={6} sm={2.9}>
        <Link 
        href="/product/[name]" 
        as={`/product/helmKYP`}
        >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/products/helmKYP.jpg"
                  alt="helm KYP"
                />
                <CardContent>
                  <Typography>helm KYP</Typography>
                  <Typography gutterBottom fontWeight="bold" component="div">
                    <Chip label="26%" size="small" color="secondary" className="mr-2"></Chip>
                    Rp. 70.000
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        </Link>
        </Grid>
        <Grid item xs={6} sm={2.9}>
        <Link 
        href="/product/[name]" 
        as={`/product/helmKYP`}
        >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/products/helmKYP.jpg"
                  alt="helm KYP"
                />
                <CardContent>
                  <Typography>helm KYP</Typography>
                  <Typography gutterBottom fontWeight="bold" component="div">
                    <Chip label="26%" size="small" color="secondary" className="mr-2"></Chip>
                    Rp. 70.000
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        </Link>
        </Grid>
        <Grid item xs={6} sm={2.9}>
        <Link 
        href="/product/[name]" 
        as={`/product/helmKYP`}
        >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/products/helmKYP.jpg"
                  alt="helm KYP"
                />
                <CardContent>
                  <Typography>helm KYP</Typography>
                  <Typography gutterBottom fontWeight="bold" component="div">
                    <Chip label="26%" size="small" color="secondary" className="mr-2"></Chip>
                    Rp. 70.000
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        </Link>
        </Grid>
        <Grid item xs={6} sm={2.9}>
        <Link 
        href="/product/[name]" 
        as={`/product/helmKYP`}
        >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/products/helmKYP.jpg"
                  alt="helm KYP"
                />
                <CardContent>
                  <Typography>helm KYP</Typography>
                  <Typography gutterBottom fontWeight="bold" component="div">
                    <Chip label="26%" size="small" color="secondary" className="mr-2"></Chip>
                    Rp. 70.000
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        </Link>
        </Grid>
    </Grid>
   </>
  )
}