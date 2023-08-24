import { Container } from "./style";

export const Localização: React.FC = () => {
  return (
    <Container>
      <div className="box_img">
        <div className="img_1"></div>
        <div className="txt">
            <p className="titulo"> LOCALIZAÇÃO </p>
          <p>
            Nosso espaço está localizado ao lado do principal
            Shopping de Fortaleza. A moderna torre empresarial Iguatemi é
            localizada ao lado do shopping Iguatemi, com fácil acesso a
            restaurantes, farmácia, supermercado, lojas, e muito mais.
          </p>

          <p> Conforto • Facilidade • Segurança</p>
        </div>
        <div className="img_2"></div>
      </div>
    </Container>
  );
};

export default Localização;
