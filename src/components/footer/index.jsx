import {FiAlertTriangle} from 'react-icons/fi'
import {BsFacebook, BsInstagram , BsTwitter, BsYoutube} from 'react-icons/bs'
import { useNavigate } from 'react-router'

import { Button } from '@material-tailwind/react'
function Footer(){
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/DenuncieAqui')
    }

    return(
        <footer className='bg-header h-52 flex align-middle justify-around'>
            <div className='flex flex-col p-6 gap-2'>
            <FiAlertTriangle size={64}></FiAlertTriangle>
            <Button className='font-bold font-montserrat bg-black' onClick={handleClick}>Denuncie aqui!</Button>
            </div>  
            <div className='flex font-montserrat text-white p-6 flex-col gap-5'>
                <h1>Empresa</h1>
                <a href="#" className='underline '>Sobre nós</a>
                <a href="#" className='underline'>Perguntas Frequentes</a>
            </div>
            <div className='flex font-montserrat text-white p-6 flex-col gap-5'>
                <h1>Fale conosco</h1>
                <a href="#" className='underline '>Email</a>
                <a href="#" className='underline'>SMS</a>
            </div>
            <div className='flex font-montserrat text-white p-6 flex-col gap-5'>
                <h1>Nossas redes sociais</h1>
                <div className='flex gap-5 justify-center'>
                <BsInstagram></BsInstagram>
                <BsTwitter></BsTwitter>
                <BsFacebook></BsFacebook>
                <BsYoutube></BsYoutube>
                </div>
            </div>


        </footer>
    )
}
export default Footer