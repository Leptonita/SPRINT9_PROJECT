import styled, { css } from "styled-components";

export const BtnChartsSel = styled.div`
width: 80%;
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

export const DivBtnDay = styled.div`
display: flex;
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
&:hover {
    color:white;
    background-color: rgba(255, 99, 132, 0.9);
}
`;

