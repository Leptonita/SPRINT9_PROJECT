import styled, { css } from "styled-components";

const colors = {
  lines: "#adadad",
  error: "#db1212",
  success: "#16d426",
  greyBorder: "#dd8500",
  greenish: "rgb(0, 169, 140)",
  yellowish: "rgb(255, 185, 29)",
  pinkish: "#d100b9"
}

export const DivContent = styled.div`
width: 80%;
margin: 10px auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const TiText = styled.div`
color: ${colors.greenish};
@media screen and (max-width: 768px){
  text-align: center;
    width: 99%;
}
`;

export const DivCalc = styled.div`
  width: 70vw;
max-width: 750px;
border: 1px dotted red;
margin: 30px 10px 10px 10px;
padding: 30px;
background-image: url(${require(`../assets/img/earn-money-internet-vectorportal.png`)});
background-size: 50%;
background-repeat: no-repeat;
background-position: 90% 125px;
@media screen and (max-width: 768px){
  width: 100%;
    flex-direction: column;
justify-content: center;
align-items: center;
background-position: 90% 0px;
}
`;



export const CenteredDiv = styled.div`
width: 100%;
display: flex;
justify-content: center;
`;

export const DivBtnCalc = styled(CenteredDiv)`
margin-top: 30px;
`;

export const DivResults = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 20px 0;
@media screen and (max-width: 768px){
  align-items: center;
    width: 99%;
}

`;

export const BtnCalc = styled.button`
text-transform: uppercase; 
font-weight: bolder;
font-size: 1.2rem;
border: 1px solid rgb(255, 99, 132);
border-radius: 30px;
color:rgb(255, 99, 132);
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

export const DivInputs = styled.div`
display: flex;
align-items: center;
margin: 10px 0;
@media screen and (max-width: 768px){
  flex-direction: column;
  align-items: center;
    width: 99%;
}
`;

export const InputCalc = styled.input`
padding: 5px 10px;
margin: 3px 5px;
border: 1px solid rgba(0,0,0,0.1);
background-color: rgba(255, 244, 219, 0.249);
border-radius: 10px;

&:focus {
  outline-width: 0;
  border-color:#ff0000;
  border: 2px solid ${colors.greenish};
  background-color: rgba(219, 255, 223, 0.3);
 }
`;

export const ErrorMessage = styled.span`
border: 1px dotted red;
padding: 5px;
margin: 0 10px;

font-size: 12px;
color: ${colors.error};
visibility: hidden;
${props => !props.valid && css`
visibility: visible;
`}
`;

export const DivResultsCost = styled.div`
display: flex;
align-items: center;
@media screen and (max-width: 768px){
  flex-wrap: wrap;
  justify-content: center;
    width: 99%;
}
`;

export const DivResultCost = styled.div`
display: flex;
flex-direction: column;
align-items: center;
color: ${colors.lines};
font-size: 0.8rem;
`;

export const Result = styled.div`
color: white;
font-size: 1.2rem;
height: 90px;
width: 90px;
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
margin: 14px;
border-radius: 100%;
border: 6px dotted #8800ff2a;
background-color: ${props => props.color};
background-image: radial-gradient(${props => props.color}, #8800ff25);
`;