import styled from "styled-components";

export const DivContent = styled.div`
width: 90%;
margin: 0 auto;
display: flex;
justify-content: space-around;
@media screen and (max-width: 769px){
    flex-direction: column;
}
`;

export const DivHome = styled.div`
width: 45vw;
max-width: 750px;
border: 1px dotted transparent;
margin: 10px 10px 0 0;
padding: 30px 0;
background-color: rgba(255, 255, 255, 0.7);
@media screen and (max-width: 769px){
    font-size: 0.9rem;
}
`;

export const DivIntro1 = styled.div`
@media screen and (max-width: 769px){
    display: none;
}
`;

export const DivImg = styled.div`
width: 55%;
margin: 50px 0 0 10px;
@media screen and (max-width: 769px){
    width: 100%;
    margin: 0;
}
`;

export const ImgAhorro = styled.img`
width: 100%;
`;



/* 
background-image: url(${require(`../assets/img/CALC-CONTADOR-2.jpg`)});
background-size: 70%;
background-repeat: no-repeat;
background-position: right top;
background-image: url(${require(`../assets/img/pinzas.png`)});
background-size: 50%;
background-repeat: no-repeat;
background-position: center -41px; */
