import styled from "styled-components";

export const Container = styled.div`

grid-area: FN;
background-color: var(--boxLocal);


display: flex;
justify-content: space-around;
align-items: center;



ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 16px;

    list-style: none;


}

a {
    text-decoration: none;
    color: var(--white);
     font-family: Margem,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
    font-size: 30px;
    font-weight: 500;
    font-style: normal;

    transition: all 0.5s;
}

a:hover {
    border-bottom: 3px solid white;
    padding-left: 8px;
}

.inf {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 8px;
}


.txt {
    color: var(--buttons);
     font-family: Margem,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
    font-size: 30px;
    font-weight: 500;
    font-style: normal;

}

.email {
    color: var(--white);
     font-family: Margem,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
    font-size: 30px;
    font-weight: 700;
    font-style: normal;

    cursor: pointer;

}

.email:hover {
    border-bottom: 3px solid white;   
}

.telefone {
    color: var(--white);
     font-family: Margem,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
    font-size: 24px;
    font-weight: 500;
    font-style: normal;
    cursor: pointer;
    width: 60%;
  
}

.telefone:hover {
    border-bottom: 3px solid white;  
}

.ul_icons {
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: center;
    align-items: start;
    gap: 24px;

    margin-top: 16px;

}

button {
    width: 35px;
    height: 35px;
    border-radius: 50px;
    
    font-size: 20px;
    background-color: var(--buttons);
    color: var(--boxLocal);
    font-weight: 500;
    font-style: normal;

    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
}


.detalhe {
    padding-top: 160px;
}


`;