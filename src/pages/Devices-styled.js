import styled from "styled-components";


export const OverlayD = styled.div`
position: absolute;
top: 110px;
left: 0;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items:flex-start;
`;
export const DivDevices = styled.div`
width: 340px;
padding: 20px 25px;
margin-top: 30px;
position: relative;
background-color: rgb(255, 252, 244);
border: 1px solid rgba(0, 169, 140, 0.5);
font-size: 0.87rem;
border-radius: 5px;
color: #006655;
@media screen and (max-width: 768px){
      width: 310px;
}
`;

export const DivCloseIcon = styled.div`
display: flex;
justify-content: flex-end;
color: rgb(0, 169, 140);
margin-bottom: 10px;
margin-right: -30px;
margin-top: -25px;
`;

export const DivNota = styled.div`
display: flex;
justify-content: flex-end;
color: rgb(0, 169, 140);
margin-bottom: 10px;
`;

