import styled from "styled-components";

export const Container = styled.div`

grid-area: CT;
background-color: var(--buttons);
position: relative;

display: flex;
justify-content: end;
align-items: center;





.pdf {
    position: absolute;
    top: 53%;
    left: 20%;
    transform: translate(-50%,-50%);
    

    width: 750px;
    
}

.detalhe_1 {

    position: absolute;
    top: 30%;
    left: 35%;
    transform: translate(-50%,-50%);

}

.form {
   
    width: 800px;
    margin-right: 24px;

    display: flex;
    justify-content: center;
    align-items: start;
    gap: 24px;
    flex-direction: column;
}

.titulo {
    color: var(--white);
    font-family: Margem,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
    font-size: 30px;
    transition: all 0.5s;
    font-weight: 700;
    font-style: normal;
}

.txt {
    color: var(--white);
    font-family: Margem,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
    font-size: 20px;
    transition: all 0.5s;
    font-weight: 500;
    font-style: normal;
}

ul {
    text-decoration: none;
    list-style: none;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 16px;

   
}

input {
    width: 700px;
    height: 50px;

    border-radius: 10px;

    border: 3px solid var(--border);
    color: #333;
    font-family: Margem,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
    font-size: 20px;
    transition: all 0.5s;
    font-weight: 500;
    font-style: normal;

    padding-left: 16px;

}

button {
    width: 200px;
    height: 40px;
    border-radius: 20px;
    font-family: Margem,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
    font-size: 20px;
    background-color: var(--secundary);
    color: var(--white);
    font-weight: 500;
    font-style: normal;
    
    cursor: pointer;
    transition: all 0.5s;

    margin-left: 63%;

}





`;