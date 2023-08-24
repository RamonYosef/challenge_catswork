import { styled } from "styled-components";

export const Grid = styled.div`

// MN = menu
// IN = início
// SE = serviços
// LC = localização
// DF = diferenciais
// DP = depoimentos
// CN = Conhecer
// CT = contato
// FN = Final


height: 100%;

display: grid;
grid-template-columns: 90px;
grid-template-rows: 150px 700px 700px 700px 1300px 600px 500px 700px 400px;
grid-template-areas: 'MN MN MN'
                     'IN IN IN'
                     'SE SE SE'
                     'LC LC LC'
                     'DF DF DF'
                     'DP DP DP'
                     'CN CN CN'
                     'CT CT CT'
                     'FN FN FN';



`;