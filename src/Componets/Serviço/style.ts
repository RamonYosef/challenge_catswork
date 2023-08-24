import { styled } from "styled-components";

interface prop
{
    background?:any
}

export const Container = styled.div<prop>`

grid-area: SE;
position: relative;

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 64px;

z-index: 0;



>
.detalhes_1
{
    position: absolute;
    top: 10%;
    left: -1%;
    transform: translate(-50%,-50%);
   

    transform: rotate(-45deg);

    width: 250px;
    height: 100px;

    background-image: url(https://www.catswork.com.br/image-s.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

}

.detalhes_1 img
{
    width: 100%;
}

.detalhes_2
{
    position: absolute;
    top: 10%;
    left: 86%;
    transform: translate(-50%,-50%);
   

    transform: rotate(220deg);

    width: 220px;
    height: 200px;

    
    

    z-index: 0;

    background-image: url(https://www.catswork.com.br/image-c.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    
}


.negocio
{
    color: black;
     font-family: Margem,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
    font-size: 30px;
    transition: all 0.5s;
    font-weight: 500;
    font-style: normal;
    width: 60%;
    text-align: center;
    margin-bottom: 64px;
}
ul
{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 164px;
    list-style: none;


}





`

export const Box =  styled.div<prop>`

position: relative;
width: 254px;
height: 230px;
background-color:${prop => prop.background? 'var(--secundary)' : 'var(--buttons)'}; 
margin-top: 32px;

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
gap: 24px;


padding: 20px;
padding-top: 110px;




>
a
{
    color: var(--white);
    font-family: Margem,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 18px;
    padding-top: 20px;


}

.txt
{
    color: var(--white);
    font-family: Margem,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 24px;
   
    height: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 0;
  
}


.icons
{
    width: 130px;
    height: 130px;
    padding: 16px;
    border-radius: 100%;
    background-color: var(--box);

    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;


    position: absolute;
    top: -65px;
    
}

.icons img
{
    width: 70%;

}
`;