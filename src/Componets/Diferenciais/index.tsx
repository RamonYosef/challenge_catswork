import {Container, Box} from './style'

export const Diferenciais: React.FC = () => {

    return(
       <Container>

        <h1>DIFERENCIAIS</h1>

        <div className="diferencias">
            <Box> 
                <img src="https://api.catswork.com.br/uploads/contract_d5b39f7526.png" alt="" />
                <p className="titulo">Contratação 100% online</p>
                <p className="txt">Contrate de qualquer lugar e comece a utilizar imediatamente</p>
            </Box>
            <Box background>
                <img src="https://api.catswork.com.br/uploads/coffee_832d64e190.png" alt="" />
                <p className="titulo">Lounge e Café</p>
                <p className="txt">Serviços de copa, café e água a vontade</p>
            </Box>
            <Box>
                <img src="https://api.catswork.com.br/uploads/printer_c60893849b.png" alt="" />
                <p className="titulo">Impressora e scanner</p>
                <p className="txt">Impressões, cópias e digitalização de documentos</p>
            </Box>
            <Box background>
                <img src="https://api.catswork.com.br/uploads/clock_7f12623c2c.png" alt="" />
                <p className="titulo">Acesso 24horas 7 dias por semana</p>
                <p className="txt">Seu escritório sem restrições</p>
            </Box>
            <Box>
                <img src="https://api.catswork.com.br/uploads/speed_7358325c34.png" alt="" />
                <p className="titulo">Internet Alta velocidade</p>
                <p className="txt">Wifi rápido e seguro</p>
            </Box>
            <Box background>
                <img src="https://api.catswork.com.br/uploads/talk_47017137f7.png" alt="" />
                <p className="titulo">Consultoria Inicial Gratuita</p>
                <p className="txt">Saiba como utilizar nossos serviços para alavancar seus negócios</p>
            </Box>
            <Box>
                <img src="https://api.catswork.com.br/uploads/meeting_f039069937.png" alt="" />
                <p className="titulo">Recepção 08h às 18h</p>
                <p className="txt">Receba clientes e correspondências</p>
            </Box>
            <Box  background>
                <img src="https://api.catswork.com.br/uploads/parking_5aa95f3ccc.png" alt="" />
                <p className="titulo">Estacionamento</p>
                <p className="txt">Estacionamemto amplo e de fácil acesso</p>
            </Box>
            <Box>
                <img src="https://api.catswork.com.br/uploads/monitor_1951f800d8.png" alt="" />
                <p className="titulo">Monitores exclusivos</p>
                <p className="txt">Estações equipadas com monitores de 23 P.</p>
            </Box>
        </div>

        <button>NOSSO ESPAÇO</button>

       

       </Container>

    );

}


export default Diferenciais;