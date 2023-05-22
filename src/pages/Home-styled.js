import styled from "styled-components";

export const DivHome = styled.div`
width: 70vw;
max-width: 750px;
border: 1px dotted transparent;
margin: 30px 10px 0 0;
padding: 30px;
background-color: rgba(255, 255, 255, 0.7);
`;

export const DivContent = styled.div`
width: 80%;
height: 90vh;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
background-image: url(${require(`../assets/img/backgr2.png`)});
background-size: 90%;
background-repeat: no-repeat;
background-position: center ;
/* background-image: url(${require(`../assets/img/pinzas.png`)});
background-size: 50%;
background-repeat: no-repeat;
background-position: center -41px; */
`;