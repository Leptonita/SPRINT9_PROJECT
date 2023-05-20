import styled, { css } from "styled-components";

export const DivCalc = styled.div`
width: 500px;
border: 1px dotted red;
margin: 50px;
padding: 30px;
`;
export const CenteredDiv = styled.div`
width: 100%;
display: flex;
justify-content: center;
`;

export const DivBtnCalc = styled(CenteredDiv)`
margin-top: 40px;
`;

export const DivResults = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 20px 0;
`;

export const BtnCalc = styled.button`
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
