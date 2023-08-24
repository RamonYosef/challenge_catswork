import styled from "styled-components";

export const Container = styled.div`
grid-area: DP;

background-color: var(--boxLocal);

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 32px;



.titulo {
    color: var(--white);
    font-family: Margem,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
    font-size: 30px;
    letter-spacing: .17em;
    transition: all 0.5s;
    font-weight: 700;
    font-style: normal;

    padding-top: 24px ;
}


ul {
    display: flex;
    list-style: none;
    justify-content: center;
    align-items: center;
    gap: 64px;

    padding-top: 64px;
}


.box {
    padding: 32px;

    width: 350px;
    height: 300px;

    background-color: var(--box);

    border-radius: 15px;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    gap: 16px;
}


.titulo_txt {
    color: var(--white);
    font-family: Margem,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
    font-size: 20px;
    transition: all 0.5s;
    font-weight: 700;
    font-style: normal;

}

.txt {

    color: var(--white);
    font-family: Margem,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
    font-size: 15px;
    transition: all 0.5s;
    font-weight: 500;
    font-style: normal;

}

`;