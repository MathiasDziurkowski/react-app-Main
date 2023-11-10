import { Select, Option} from "@material-tailwind/react"

function Label() {
    return(
        <>
        <div className="text-center mt-5">
        <h1 className="font-montserrat font-bold">Faça sua denúncia</h1>
        </div>
        <div className="flex font-montserrat p-6">
            <p>Selecione sua estado:</p>
            <Select variant="standart" label="Selecione sua estado">
                <Option>Acre</Option>
                <Option>Alagoas</Option>
                <Option>Amapá</Option>
                <Option>Amazonas</Option>
                <Option>Bahia</Option>
                <Option>Ceará</Option>
                <Option>Espírito Santo</Option>
                <Option>Goiás</Option>
                <Option>Maranhão</Option>
                <Option>Mato Grosso</Option>
                <Option>Mato Grosso do Sul</Option>
                <Option>Minas Gerais</Option>
                <Option>Pará</Option>
                <Option>Paraíba</Option>
                <Option>Paraná</Option>
                <Option>Pernambuco</Option>
                <Option>Piauí</Option>
                <Option>Rio de Janeiro</Option>
                <Option>Rio Grande do Norte</Option>
                <Option>Rio Grande do Sul</Option>
                <Option>Rondônia</Option>
                <Option>Roraima</Option>
                <Option>Santa Catarina</Option>
                <Option>São Paulo</Option>
                <Option>Sergipe</Option>
                <Option>Tocantins</Option>
                <Option>Distrito Federal</Option>
            </Select>
        </div>
        </>
    )
}
export default Label