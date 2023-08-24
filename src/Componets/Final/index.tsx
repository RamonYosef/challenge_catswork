import {Container} from './style'
import {BsInstagram,BsYoutube} from 'react-icons/bs'

export const Final: React.FC = () => {

    return(
       <Container>

        <img src="https://api.catswork.com.br/uploads/cats_isley_ff8bb27410.svg" alt="" className="logo" />

        <ul>
            <li><a href="#">Espaços</a></li>
            <li><a href="#">Serviços</a></li>
            <li><a href="#">Diferencial</a></li>
            <li><a href="#">Área do Cliente</a></li>
        </ul>
        
        <div className="inf">
            <p className="txt">Fale com a gente!</p>

            <p className="email">contato@catswork.com.br</p>

            <p className="telefone">+55 (85) 3021-7307</p>

            <ul className='ul_icons'>
                <li><button className='redesSociais'><BsInstagram/></button></li>
                <li><button className='redesSociais'><BsYoutube/></button></li>
            </ul>

        </div>

        <img src="https://api.catswork.com.br/uploads/icon_fin_cw_a1398c731f.svg" alt="" className="detalhe" />

       

       </Container>

    );

}


export default Final;