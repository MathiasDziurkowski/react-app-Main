import { Card, CardBody, CardHeader } from "@material-tailwind/react"
function Articles() {
    return(
        <>
        <Card className="mt-20 font-montserrat">
            <CardHeader className="text-center">Das Disposições Preliminares</CardHeader>
            <CardBody className="font-montserrat">
                <h1 className="font-bold">Artigo Nº 1</h1>
                <p className="">Esta Lei dispõe sobre a proteção integral à criança e ao adolescente.</p>
                <h1 className="font-bold">Artigo Nº 2</h1>
                <p>Considera-se criança, para os efeitos desta Lei, a pessoa até doze anos de idade incompletos, e adolescente aquela entre doze e dezoito anos de idade.</p>
            </CardBody>
        </Card>
        <Card className="my-20 font-montserrat">
            <CardHeader className="text-center">Do direito à vida e à saúde</CardHeader>
            <CardBody className="font-montserrat ">
                <h1 className="font-bold">Artigo Nº 7</h1>
                <p className="">A criança e o adolescente têm direito a proteção à vida e à saúde, mediante a efetivação de políticas sociais públicas que permitam o nascimento e o desenvolvimento sadio e harmonioso, em condições dignas de existência.</p>
                <h1 className="font-bold">Artigo Nº 8</h1>
                <p>É assegurado a todas as mulheres o acesso aos programas e às políticas de saúde da mulher e de planejamento reprodutivo e, às gestantes, nutrição adequada, atenção humanizada à gravidez, ao parto e ao puerpério e atendimento pré-natal, perinatal e pós-natal integral no âmbito do Sistema Único de Saúde. (Redação dada pela Lei nº 13.257, de 2016)</p>
            </CardBody>
        </Card>
        </>
    )
}
export default Articles