import {Container} from './style'
import {BsInstagram,BsYoutube} from 'react-icons/bs'

const logo = require("../../Assets/logo(1).png")

export const Menu: React.FC = () => {

    return(
        <Container>
            <div className='logo'>
            <img src='https://api.catswork.com.br/uploads/lehader_logo_cw_d70982f225.svg' alt="" />
            </div>

            <ul>
                <li><a href="#" className='a'>Início</a></li>
                <li><a href="#" className='a'>Serviços</a></li>
                <li><a href="#"className='a'>Diferencial</a></li>
                <li><a href="#" className='a'>Área do cliente</a></li>
                <li><button className='FaleConosco'>FALE CONOSCO</button></li>
                <li><button className='redesSociais'><BsInstagram/></button></li>
                <li><button className='redesSociais'><BsYoutube/></button></li>

            </ul>
           

        </Container>
    );

}


export default Menu;