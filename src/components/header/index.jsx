import { Button } from '@material-tailwind/react'
import { MdAccountCircle } from 'react-icons/md'
import { TbArrowDown } from 'react-icons/tb'
function Header(){
    const navigate = useNavigate()
    const handleClick1 = () => {
        navigate('/')
    }
    return (
        <header className="bg-header h-20 flex justify-around">
                <div className="flex gap-5 p-5 align-middle self-center flex-row font-montserrat font-bold text-3xl">
                    <MdAccountCircle size={55}></MdAccountCircle>
                    <h1 className="text-white self-center">Informa Já</h1>
                </div>
                <div className='flex gap-5 p-5'>
                <Button className='flex align-middle gap-5  font-montserrat enabled:bg-white text-black' onClick={handleClick1}>Atualizações Recentes <TbArrowDown/></Button>
                <Button className='flex align-middle gap-5  font-montserrat enabled:bg-white text-black' onClick={handleClick2}>Política de Segurança <TbArrowDown/></Button>
                </div>
        </header>
    )
}
export default Header