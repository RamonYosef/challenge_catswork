import Menu from '../Menu';
import Inicio from '../Inicio';
import {Grid} from './style'
import Serviço from '../Serviço';
import Localização from '../Localização';
import Diferenciais from '../Diferenciais';
import Depoimentos from '../Depoimentos';
import Conhecer from '../Conhecer';
import Contato from '../Contato';
import Final from '../Final';

export const Layout: React.FC = () => {

    return(
        <Grid>
            <Menu/>
           <Inicio/>
           <Serviço/>
           <Localização/>
           <Diferenciais/>
           <Depoimentos/>
           <Conhecer/>
           <Contato/>
           <Final/>
           

        </Grid>

    );

}


export default Layout;