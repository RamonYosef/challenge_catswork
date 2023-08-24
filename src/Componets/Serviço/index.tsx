import { Container, Box } from "./style";

export const Serviço: React.FC = () => {
  return (
    <Container>
      <div className="detalhes_1"></div>

      <div className="detalhes_2"></div>

      <p className="negocio">
        Seu negócio no Empresarial Iguatemi por menos de R$ 3,50 por dia.
        Economize com estrutura física e invista em crescimento.
      </p>

      <ul>
        <li>
          <Box>
            <div className="icons">
              <img
                src="https://api.catswork.com.br/uploads/Group_1987_c411bee3ca.svg"
                alt=""
              />
            </div>
            <p className="txt">Domicilio Fiscal</p>
            <a href="#">Saiba mais</a>
          </Box>
        </li>
        <li>
          <Box background>
            <div className="icons">
              <img
                src="https://api.catswork.com.br/uploads/group_975f64b8af.png"
                alt=""
              />
            </div>
            <p className="txt">Sala de Reunião, Atendimento 4 pessoas</p>
            <a href="#">Saiba mais</a>
          </Box>
        </li>
        <li>
          <Box>
            <div className="icons">
              <img
                src="https://api.catswork.com.br/uploads/group_5394ce83f5_3_0c5ca1b328.png"
                alt=""
              />
            </div>
            <p className="txt">Sala de Reunião, Atendimento 8 pessoas</p>
            <a href="#">Saiba mais</a>
          </Box>
        </li>
        <li>
          <Box background>
            <div className="icons">
              <img
                src="https://api.catswork.com.br/uploads/computer_7cc75e2dac_4f645a0212.png"
                alt=""
              />
            </div>
            <p className="txt">Estações de trabalho</p>
            <a href="#">Saiba mais</a>
          </Box>
        </li>
      </ul>
    </Container>
  );
};

export default Serviço;
