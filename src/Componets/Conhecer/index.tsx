import {Container} from './style'

export const Conhecer: React.FC = () => {

    return(
       <Container>

        <div className="Conhecer">

            <div className="box">
                <img src="https://api.catswork.com.br/uploads/contact_0a8bca5a96.png" alt="" />

                <p className="txt">Que tal conhecer a Catswork?</p>
            </div>

            <button>FALE CONOSCO</button>

        </div>

       

       </Container>

    );

}


export default Conhecer;