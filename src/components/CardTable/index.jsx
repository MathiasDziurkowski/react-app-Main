import CardTab from "../card";

function cardTable() {
    return(
        <div className="flex flex-col justify-center">
            <h1 className="p-6 font-montserrat font-bold text-center">Direitos do Estatuto da Criança e do Adolescente</h1>
        <CardTab titulo="Políticas de Segurança" img="./images/card-1.png" texto="As políticas de segurança para a infância e juventude têm como objetivo garantir a proteção física, emocional e social desses grupos. Algumas das principais políticas de segurança para a infância e juventude incluem:"></CardTab>
        <CardTab titulo="Prevenção ao bullying" img="../../public/images/card-2.png" texto="Promovendo programas de conscientização nas escolas e comunidades, incentivando um ambiente seguro e acolhedor, onde as crianças e jovens possam se sentir protegidos e livres de intimidação e discriminação."></CardTab>
        <CardTab titulo="Promoção da saúde mental" img="../../public/images/card-3.png" texto="Investindo em políticas que visem à prevenção, identificação e tratamento de problemas de saúde mental entre crianças e jovens, bem como garantindo acesso a serviços de apoio e acompanhamento psicológico."></CardTab>
        </div>
    )
}
export default cardTable