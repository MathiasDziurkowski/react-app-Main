import { Card, CardBody } from "@material-tailwind/react"

function Denuncia(){
    return(
        <>
        <div className="p-6">
        <Card className="flex flex-col">Para realizar a denúncia, siga os seguintes passos </Card>
        <CardBody>
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
        </>
    )

}
export default Denuncia