import { Carousel } from "@material-tailwind/react"
function CarouselTab(){
    return (
        <Carousel className=" bg-blue-200">
            <img src="../../public/images/c-1.png" alt="" className="m-auto" />
            <img src="../../public/images/c-2.png" alt="" className="m-auto" />
            <img src="../../public/images/c-3.png" alt="" className="m-auto"/>
        </Carousel>
    )
}
export default CarouselTab