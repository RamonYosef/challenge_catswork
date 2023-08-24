import styled from "styled-components";

export const Container = styled.div`

grid-area: CN;

display: flex;
justify-content: center;
align-items: center;


>

.Conhecer
{
    width: 1700px;
    height: 400px;

    background-image: url(https://api.catswork.com.br/uploads/Rectangle_2891_f733538375.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    display: flex;
    justify-content: space-around;
    align-items: center;

}


.box
{
    background-color: var(--secundary);
    width: 500px;
    padding: 28px;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 24px;

    
}

img
{
    width: 80px;
}

.txt
{
    color: var(--white);
    font-family: Margem,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
    font-size: 30px;
    transition: all 0.5s;
    font-weight: 700;
    font-style: normal;
}

button
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

button:hover
{
    background-color: #FB1609;
}


`;
