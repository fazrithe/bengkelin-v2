import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/joy/Typography';
import { CardActionArea } from '@mui/material';
import Link from "next/link";


export default function CategoryHome(){
  return(
    <Grid item xs={12} sm={6}>
      <h4>Kategori Pilihan</h4>
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
                  <Typography fontSize="14" fontWeight="lg">
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
                  <Typography fontSize="14" fontWeight="lg">
                    Sparepart
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link href="/cat/[name]" as={`/cat/bengkel`}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/bengkel.jpg"
                  alt="Komunitas"
                />
                <CardContent>
                  <Typography fontSize="14" fontWeight="lg">
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