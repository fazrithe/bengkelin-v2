import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image";
import {Hidden} from "@mui/material"

export default function CarouselHome(){
    return(
        <>
        <Hidden only="xs">
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
        </Hidden>
        <Hidden only={['sm', 'lg']}>
        <Carousel variant="dark" className="mt-3">
            <Carousel.Item>
            <Image
                src="/global/banner-sparepart.png"
                alt="Picture of the author"
                className="d-block w-100"
                width={500}
                height={150}
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
                height={150}
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
                height={150}
            />
            <Carousel.Caption>
            <h5>Bengkelin</h5>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </Hidden>
    </>
    )
}