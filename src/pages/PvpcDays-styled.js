import styled, { css } from "styled-components";

export const DivPvpcDays = styled.div`
width: 210px;
height: 80%;
margin-top: 30px;
background-image: url(${require(`../assets/img/save-energy-vectorportal.png`)});
background-position: center 270px;
background-size: 100%;
background-repeat: no-repeat;
`;

export const DivBtnDay = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`;

export const BtnDays = styled.button`
color:rgb(255, 99, 132);
border: 1px solid rgb(255, 99, 132);
border-radius: 30px;
background-color: rgba(255, 99, 132, 0.2);
margin: 5px;
padding: 5px 10px;
cursor: pointer;
transition: all 0.5s ease;
${props => props.isSelected && css`
    color:white;
    background-color: rgba(255, 99, 132, 1);
  `}
&:hover {
    color:white;
    background-color: rgba(255, 99, 132, 0.7);
}
`;

export const DivAveragePrice = styled.div`
width: 95%;
text-align: center;
color: rgb(255, 99, 132);

border: 1px solid rgba(255, 99, 132, 0.2); 
background-color: rgba(255, 99, 132,0.3);
margin: 5px 0.1px;
padding: 5px 10px;
`;

export const DivMinPrice = styled(DivAveragePrice)`

color:white;
background-color: rgb(92, 180, 72);
`;

export const DivMaxPrice = styled(DivAveragePrice)`
color:white;

background-color: rgba(255, 99, 132,1);
`;

