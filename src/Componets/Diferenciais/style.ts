import styled from "styled-components";

interface prop
{
    background?:any
}

export const Container = styled.div<prop>`

grid-area: DF;

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 24px;


.diferencias {
    width: 1700px;
    height: 1000px;

    

    display: grid;
    grid-template-columns: repeat(3, 1fr);

}


h1 {
    color: black;
    font-family: Margem,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
    font-size: 30px;
    letter-spacing: .17em;
    transition: all 0.5s;
    font-weight: 700;
    font-style: normal;

    padding-bottom: 24px;

}

button {

    width: 200px;
    height: 47px;
    border-radius: 20px;
    font-family: Margem,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
    font-size: 18px;
    background-color: var(--buttons);
    color: var(--white);
    font-weight: 700;
    font-style: normal;
    margin-left: 16px;

    cursor: pointer;
    transition: all 0.5s;

    margin-top: 16px;


}

button:hover {
    background-color: #FB1609;
}



`;


export const Box = styled.div<prop>`


display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 16px;


background-color: ${prop => prop.background? 'var(--diferenciaBlue)' : 'var(--diferenciaRed)'};


.titulo {
    color: black;
    font-family: Margem,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
    font-size: 20px;
    transition: all 0.5s;
    font-weight: 500;
    font-style: normal;
}


.txt {
    color: black;
    font-family: Margem,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
    font-size: 18px;
    transition: all 0.5s;
    font-weight: 200;
    font-style: normal;
    width: 70%;
    text-align: center;
}
`