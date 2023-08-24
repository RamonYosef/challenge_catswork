import { Container } from "./style";

export const Depoimentos: React.FC = () => {
  return (
    <Container>
      <h1 className="titulo">DEPOIMENTOS DOS NOSSOS CLIENTES</h1>

      <ul>
        <li>
          <div className="box">
            <p className="titulo_txt">Maria Clara de Souza Duarte</p>

            <p className="txt">
              Escritório virtual do Catswork foi a melhor descoberta desse ano.
              Com pouco investimento, abri o CNPJ e cadastrei no google meu
              negócio o endereço fiscal. A procura foi melhor do que eu
              imaginava. Trabalho de casa e se precisar atender meu cliente está
              tudo pronto, limpo e completo.
            </p>
          </div>
        </li>
        <li>
          <div className="box">
            <p className="titulo_txt">Veras Parente</p>

            <p className="txt">
              Estrutura alto padrão. Nossos clientes são muito bem recebidos,
              salas são sempre limpas e equipadas. O apoio dos funcionários do
              local realmente é um diferencial. Facilita muito o trabalho de
              atendimento. Só agradecer.
            </p>
          </div>
        </li>
        <li>
          <div className="box">
            <p className="titulo_txt">William Trilha</p>

            <p className="txt">
              Lugar incrível. Vim de Porto Alegre e não tinha escritório montado
              ainda. O Catswork me recebeu muito bem, me senti em casa e tem
              tudo que eu precisava e muito mais. Não precisei comprar nada, nem
              fazer mudança etc.. Estrutura impecável.
            </p>
          </div>
        </li>
        <li>
          <div className="box">
            <p className="titulo_txt">ML Consultoria Empresarial</p>

            <p className="txt">
              Empresa entrega um serviço de excelência, com espaço de trabalho
              silencioso, limpo e organizado, disponibiliza cafés e água a
              vontade, além de contar com salas de reuniões modernas e com
              layout funcional e atrativo. Acesso biométrico e internet de
              altíssima velocidade. Recomendo!
            </p>
          </div>
        </li>
      </ul>
    </Container>
  );
};

export default Depoimentos;
