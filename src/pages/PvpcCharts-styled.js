import styled, { css } from "styled-components";

export const DivPvpc = styled.div`
width: 100%;
margin: 25px 10px 10px 0;
`;

export const BtnChartsSel = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
`;

export const BtnCharts = styled.button`
/* color:rgb(255, 99, 132);
background-color: rgba(145, 145, 145); */
color:white;
border: 1px solid rgba(255, 99, 132, 0.2); 
margin: 5px 0.1px;
padding: 5px 10px;
cursor: pointer;
transition: all 0.5s ease;
&:hover {
    background-color: rgb(255, 99, 132);
}
`;
export const LinesBtnSel = styled(BtnCharts)`
background-color: ${({ isBarsChart }) => !isBarsChart ? 'rgba(255, 99, 132, 0.8)' : 'rgba(145, 145, 145,0.9)'}; 
`;

export const BarBtnSel = styled(BtnCharts)`
 background-color: ${({ isBarsChart }) => isBarsChart ? 'rgba(255, 99, 132, 0.8)' : 'rgba(145, 145, 145,0.9)'}; 
`;

export const DivChart = styled.div`
width: 80%;
margin: 10px auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const DivTxt = styled.div`
width: 78%;
font-size: 0.8rem;
border: 1px dotted red;
padding: 10px;
margin: 10px auto;
`;



