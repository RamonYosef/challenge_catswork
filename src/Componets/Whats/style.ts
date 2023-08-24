import styled from "styled-components";


export const Container = styled.div`



  

width: 80px;
height: 80px;

background-color: var(--white);

border-radius: 50px;

cursor: pointer;

transition: all 0.5s;

display: flex;
justify-content: center;
align-items: center;

position: fixed;
top: 90%;
left: 95%;
transform: translate(-50%,-50%);

z-index: 10;






&:hover
{
    background-color: #EAEAEB;
    width: 60px;
    height: 60px;
    background-size: auto;
}

>

img
{
    width: 70%;
}

`;
