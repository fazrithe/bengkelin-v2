import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from "@mui/material";
import { CardActionArea } from '@mui/material';
import Link from "next/link";


export default function CategoryHome(){
  return(
    <Grid item xs={12} sm={6}>
        <Typography gutterBottom variant="h6" component="div">
          Kategori Pilihan
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
          <Link href="/cat/[name]" as={`/cat/aksesoris`}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/aksesoris.jpg"
                  alt="Aksesoris"
                />
                <CardContent>
                  <Typography fontSize="14" fontWeight="bold">
                    Aksesoris
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link href="/cat/[name]" as={`/cat/sparepart`}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/spartpart.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography fontSize="14" fontWeight="bold">
                    Sparepart
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link href="/workshop" as={`/workshop`}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="./workshop/workshop.jpg"
                  alt="Komunitas"
                />
                <CardContent>
                  <Typography fontSize="14" fontWeight="bold">
                    Bengkel
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Link>
          </Grid>
        </Grid>
  </Grid>
  )
}