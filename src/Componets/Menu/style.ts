import { styled } from "styled-components";

export const Container = styled.div`

grid-area: MN;
background-color: var(--white);


display: flex;
justify-content: space-around;
align-items: center;

position: sticky;
top: 0;
z-index: 10;






>


ul
{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;

    margin-right: 32px;
    list-style: none;
}

a
{
    text-decoration: none;
    color: black;
     font-family: Margem,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
    font-size: 24px;
    transition: all 0.5s;
    font-weight: 500;
    font-style: normal;
}

a:hover
{
    color: rgba(0, 0, 0, 0.50);
}

.logo
{

width: 20%;
margin-left: 32px;
}

.logo img
{
    width: 100%;
    cursor: pointer;

}

.FaleConosco
{
    width: 240px;
    height: 47px;
    border-radius: 20px;
    font-family: Margem,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
    font-size: 15px;
    background-color: var(--buttons);
    color: var(--white);
    font-weight: 700;
    font-style: normal;
    margin-left: 16px;

    cursor: pointer;
    transition: all 0.5s;


}

.FaleConosco:hover
{
    background-color: #FB1609;
}

.redesSociais
{
    width: 35px;
    height: 35px;
    border-radius: 50px;
    
    font-size: 20px;
    background-color: var(--buttons);
    color: var(--white);
    font-weight: 500;
    font-style: normal;

    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;

}

.redesSociais:hover
{
    background-color: #FB1609;
}



`;