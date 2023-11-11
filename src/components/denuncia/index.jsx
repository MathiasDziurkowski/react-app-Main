import { Button, Card, CardBody } from "@material-tailwind/react"

function Denuncia(){
    return(
        <>
        <div className="m-6 p-6 flex rounded-xl bg-denuncia/50 justify-around items-center">
            <div>
        <Card className="flex-col bg-white">Para realizar a denúncia, siga os seguintes passos </Card>
        <CardBody className="bg-white rounded-xl">
            <ul>
                <li>Identifique a entidade apropriada para a denúncia, como polícia, agência reguladora ou ONG.</li>
                <li>Reúna informações relevantes sobre a situação.</li>
                <li>Priorize sua segurança, especialmente se houver perigo pessoal.</li>
                <li>Escolha um método de denúncia, como linhas diretas, formulários online ou e-mails.</li>
                <li>Forneça detalhes claros e precisos ao fazer a denúncia.</li>
                <li>Mantenha registros de todos os documentos relacionados à denúncia.</li>
                <li>Acompanhe o progresso, se possível, utilizando números de protocolo.</li>
                <li>Esteja ciente das proteções legais contra retaliação, se aplicável em sua região.</li>
            </ul>
        </CardBody>
        </div>
        <Button className="bg-black">Acesse aqui</Button>
        </div>
        </>
    )

}
export default Denuncia