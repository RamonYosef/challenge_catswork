import styled from "styled-components";

export const Container = styled.div`

grid-area: LC;


padding: 32px;

display: flex;
justify-content: center;
align-items: center;


> .box_img {
    width: 1700px;
    height: 600px;

    background-color: red;

    display: flex;
    justify-content: center;
    align-items: center;
}


.img_1
{
    width: 600px;
    height: 100%;
    background-image: url(https://api.catswork.com.br/uploads/1_21565709b2.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    cursor: pointer;

    transition: 500ms linear;

   
}

.img_1:hover
{
    background-size: 120%;
}


.img_2
{
    width: 600px;
    height: 100%;
    background-image: url(https://api.catswork.com.br/uploads/3_89fde098ba.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    cursor: pointer;
}

.img_2:hover
{
    background-size: 120%;
}

.txt
{
    width: 600px;
    height: 100%;
    background-color: var(--boxLocal);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

}

.txt p 
{
    color: var(--white);
    font-family: Margem,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
    font-size: 20px;
    transition: all 0.5s;
    font-weight: 500;
    font-style: normal;
    width: 60%;
    text-align: start;
  
}
`;
