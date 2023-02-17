import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Image from "next/image";
import CategoryHome from "@/components/home/dashboard/CategoryHome";
import TabService from "@/components/home/dashboard/TabService";
import FlashSale from "@/components/home/dashboard/FlashSale";
import CardHome from "@/components/home/dashboard/CardHome";
import Products from "@/components/home/dashboard/Products";
import Carousel from 'react-bootstrap/Carousel';

const classes = {
  root: {
    flexGrow: 2
  },
  paper: {
    padding: 20,
    textAlign: "center",
    color: "#b43fd4",
    fontFamily: "Roboto"
  },

  labelSale: {
    color: "#b43fd4"
  }
};
export default function Home() {
  const images = [
    {
      src:
        "https://jourdanmesinlaundry.com/wp-content/uploads/2018/09/HEADER-BANNER-SPAREPART.png"
    },
    {
      src:
        "aksesoris.jpg"
    },
    {
      src:
        "bengkel.jpg"
    }
  ];
  return (
      <div>
        <Container fixed>
          
        <Carousel variant="dark" className="mt-3">
          <Carousel.Item>
            <Image
              src="/global/banner-sparepart.png"
              alt="Picture of the author"
              className="d-block w-100"
              width={500}
              height={300}
            />
            <Carousel.Caption>
            <h5>Bengkelin</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/global/banner-sparepart.png"
              alt="Picture of the author"
              className="d-block w-100"
              width={500}
              height={300}
            />
            <Carousel.Caption>
              <h5>Bengkelin</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/global/banner-sparepart.png"
              alt="Picture of the author"
              className="d-block w-100"
              width={500}
              height={300}
            />
            <Carousel.Caption>
            <h5>Bengkelin</h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div style={classes.root}>
            <Grid container spacing={1} className="mt-4">
              {/*This item will be 12 units on extra small screens */}
              {/*But will be 6 units on small screens */}
              <CategoryHome />
              <Grid item xs={12} sm={5.9} className="ml-2 mt-4">
                <Paper className="mt-3">
                    <TabService />
                </Paper>
              </Grid>
              <Grid container spacing={1} className="mt-2">
                <FlashSale />
              </Grid>
              <Grid container spacing={1} className="mt-4">
                <CardHome />
              </Grid>
              <Grid container spacing={1} className="mt-2">
                <Products />
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
  )
}
