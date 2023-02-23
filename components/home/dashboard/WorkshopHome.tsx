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
import { Place, Star } from "@mui/icons-material";

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

export default function WorkshopHome(){
  return(
    <>
        <Grid container alignItems="center" className="ml-2 mt-4">
          <Grid item xs={7} sm={2.5}>
            <Typography gutterBottom variant="h6" component="div">
              Bengkel di Sekitar Kamu
            </Typography>
          </Grid>
          <Grid item xs={4} sm={2}>
          <Typography gutterBottom component="div" color="secondary">
              Lihat Semua
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={6} sm={2}>
        <Link 
        href="/product/[name]" 
        as={`/product/helmKYP`}
        >
            <Card sx={{ maxWidth: 245 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="./workshop/workshop.jpg"
                  alt="Total Speed Car"
                />
                <CardContent>
                  <Typography>Total Speed Car</Typography>
                  <Grid container>
                    <Grid item>
                      <Place style={{color:"purple", fontSize:19}} /> 
                    </Grid>
                    <Grid item paddingTop={0.2}>
                      <Typography variant="caption">Jakarta Barat</Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item>
                      <Star style={{color:"#ffc400", fontSize:19}} />
                    </Grid>
                    <Grid item paddingTop={0.2}>
                      <Typography variant="caption">4.7 | Service 500+</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
        </Link>
        </Grid>
        <Grid item xs={6} sm={2}>
        <Link 
        href="/product/[name]" 
        as={`/product/helmKYP`}
        >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="./workshop/workshop.jpg"
                  alt="Total Speed Car"
                />
                <CardContent>
                  <Typography>Total Speed Car</Typography>
                  <Grid container>
                    <Grid item>
                      <Place style={{color:"purple", fontSize:19}} /> 
                    </Grid>
                    <Grid item paddingTop={0.2}>
                      <Typography variant="caption">Jakarta Barat</Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item>
                      <Star style={{color:"#ffc400", fontSize:19}} />
                    </Grid>
                    <Grid item paddingTop={0.2}>
                      <Typography variant="caption">4.7 | Service 500+</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
        </Link>
        </Grid>
        <Grid item xs={6} sm={2}>
        <Link 
        href="/product/[name]" 
        as={`/product/helmKYP`}
        >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="./workshop/workshop.jpg"
                  alt="Total Speed Car"
                />
                <CardContent>
                  <Typography>Total Speed Car</Typography>
                  <Grid container>
                    <Grid item>
                      <Place style={{color:"purple", fontSize:19}} /> 
                    </Grid>
                    <Grid item paddingTop={0.2}>
                      <Typography variant="caption">Jakarta Barat</Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item>
                      <Star style={{color:"#ffc400", fontSize:19}} />
                    </Grid>
                    <Grid item paddingTop={0.2}>
                      <Typography variant="caption">4.7 | Service 500+</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
        </Link>
        </Grid>
        <Grid item xs={6} sm={2}>
        <Link 
        href="/product/[name]" 
        as={`/product/helmKYP`}
        >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="./workshop/workshop.jpg"
                  alt="Total Speed Car"
                />
                <CardContent>
                  <Typography>Total Speed Car</Typography>
                  <Grid container>
                    <Grid item>
                      <Place style={{color:"purple", fontSize:19}} /> 
                    </Grid>
                    <Grid item paddingTop={0.2}>
                      <Typography variant="caption">Jakarta Barat</Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item>
                      <Star style={{color:"#ffc400", fontSize:19}} />
                    </Grid>
                    <Grid item paddingTop={0.2}>
                      <Typography variant="caption">4.7 | Service 500+</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
        </Link>
        </Grid>
        <Grid item xs={6} sm={2}>
        <Link 
        href="/product/[name]" 
        as={`/product/helmKYP`}
        >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="./workshop/workshop.jpg"
                  alt="Total Speed Car"
                />
                <CardContent>
                  <Typography>Total Speed Car</Typography>
                  <Grid container>
                    <Grid item>
                      <Place style={{color:"purple", fontSize:19}} /> 
                    </Grid>
                    <Grid item paddingTop={0.2}>
                      <Typography variant="caption">Jakarta Barat</Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item>
                      <Star style={{color:"#ffc400", fontSize:19}} />
                    </Grid>
                    <Grid item paddingTop={0.2}>
                      <Typography variant="caption">4.7 | Service 500+</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
        </Link>
        </Grid>
        <Grid item xs={6} sm={2}>
        <Link 
        href="/product/[name]" 
        as={`/product/helmKYP`}
        >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="./workshop/workshop.jpg"
                  alt="Total Speed Car"
                />
                <CardContent>
                  <Typography>Total Speed Car</Typography>
                  <Grid container>
                    <Grid item>
                      <Place style={{color:"purple", fontSize:19}} /> 
                    </Grid>
                    <Grid item paddingTop={0.2}>
                      <Typography variant="caption">Jakarta Barat</Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item>
                      <Star style={{color:"#ffc400", fontSize:19}} />
                    </Grid>
                    <Grid item paddingTop={0.2}>
                      <Typography variant="caption">4.7 | Service 500+</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
        </Link>
        </Grid>
   </>
  )
}