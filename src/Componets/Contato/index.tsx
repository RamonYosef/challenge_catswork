import { Container } from "./style";

export const Contato: React.FC = () => {
  return (
    <Container>
      <img
        src="https://api.catswork.com.br/uploads/frame_ciruclo_cw_5623d91f2c.png"
        alt=""
        className="pdf"
      />

      <img
        src="https://api.catswork.com.br/uploads/icon_cel_cw_44b51ac589.svg"
        alt=""
        className="detalhe_1"
      />

      <div className="form">
        <p className="titulo">Contato</p>
        <p className="txt">
          Preencha o formulário abaixo e receba no seu email nosso portifólio,
          ofertas exclusivas, e informações valiosas sobre empreendedorismo
          gestão e marketing. Cancele o recebimento quando quiser.
        </p>

        <ul>
            <li><input type="text" placeholder="nome" /></li>
            <li><input type="text" placeholder="email" /></li>
            <li><input type="text" placeholder="telefone" /></li>
            <li><input type="text" placeholder="serviço" /></li>
        </ul>

        <button>ENVIAR</button>
      </div>
    </Container>
  );
};

export default Contato;
