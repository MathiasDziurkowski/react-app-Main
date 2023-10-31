import { Card, CardBody, CardHeader } from "@material-tailwind/react"
function CardTab(props) {
    return(
        <Card className="my-12 flex-row">
            <CardHeader><img src={props.img} alt="" className="w-52" /></CardHeader>
            <CardBody className="font-montserrat">
                <h1 className="font-bold">{props.titulo}</h1>
                <p>{props.texto}</p>
            </CardBody>
            
        </Card>
    )
}
export default CardTab