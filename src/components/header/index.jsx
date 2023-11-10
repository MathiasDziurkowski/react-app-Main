import { Button } from '@material-tailwind/react'
import { MdAccountCircle } from 'react-icons/md'
import { TbArrowDown } from 'react-icons/tb'
import { useNavigate, Link } from 'react-router-dom'
import HomePage from '../../pages/Homepage'
import PoliticaSeguranca from '../../pages/PoliticaSeguranca'
function Header(){

    const navigate = useNavigate();

    const handleClick1 = () =>{
        navigate('/')
    }
    const handleClick2 = () =>{
        navigate('/PoliticasSeguranca')
    }

    return (
        <header className="bg-header h-20 flex justify-around">
                <div className="flex gap-5 p-5 align-middle self-center flex-row font-montserrat font-bold text-3xl">
                    <MdAccountCircle size={55}></MdAccountCircle>
                    <h1 className="text-white self-center">Informa Já</h1>
                </div>
                <div className='flex gap-5 p-5'>
                <Button className='flex align-middle gap-5  font-montserrat enabled:bg-white text-black' onClick={handleClick1}>Atualizações Recentes<TbArrowDown/></Button>
                <Button className='flex align-middle gap-5  font-montserrat enabled:bg-white text-black' onClick={handleClick2}>Políticas de Segurança<TbArrowDown/></Button>
                </div>
        </header>
    )
}
export default Header