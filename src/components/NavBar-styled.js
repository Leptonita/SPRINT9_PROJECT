import styled from "styled-components";
//import logo from '../sw_logo.webp';
import { NavLink } from 'react-router-dom';

const greyBorder = "#4f4f4f";
const pinkyBorder = "rgba(255, 99, 132, 0.2)";
const pinky = "rgba(255, 99, 132, 1)";
const greeny = "#00a98c";
const greenyHover = "#008973";
const yellowy = "#ffb91d";


export const DivHeader = styled.div`
color: #adadad;
`;

export const DivBarGridLogin = styled.div`
display: grid;
height: 105px;
grid-template-columns: 1fr 1fr 10fr 1fr ;
align-items: center;
padding: 10px 30px;
background-color: rgba(255,185,29,0.67);
border-bottom: 2px solid ${pinkyBorder};
box-shadow: 2px 2px 9px gray;


@media(max-width: 768px) {
display: flex;
flex-direction: column;
justify-content: space-between;

  }
`;
export const DivImg = styled.div`
display: flex;
justify-content: center;
`;

export const LogoImg = styled.img`
width: 210px ;
margin: 0 auto;
@media(max-width: 768px) {
  position: absolute;
  top: 11px;
  margin-left: 50px;
    min-width: 140px;
    margin-right: 5px;
  }
`;

export const DivLoginLeft = styled.div`
visibility: hidden;

@media(max-width: 768px) {
    visibility: visible;
    display: block;
     width: 100%;
  height: 100%;
  text-align: right;
  }
`;
export const DivLoginLeftLinks = styled.div`
display:none;
position: relative;
    z-index: 999;
@media(max-width: 768px) {
    display: block;
    background-color: white;

    margin-top: 43px;
    margin-left: -20px;
    text-align: left;
  }
`;

export const DivLoginRight = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-content: center;

@media(max-width: 768px) {
  align-self: start;
  margin-top: 10px;
}
`;



export const DivLogin = styled.div`
display: flex;
flex-flow: row wrap;
align-content: flex-end;
margin-left: auto;

@media(max-width: 768px) {
    flex: column; 
   /*  margin-left: 0;*/
   align-content: flex-end;
   margin-left: 10px
  }
`;

export const LinkIds = styled.span`
cursor: pointer;
color: gray;
&:hover {
  color: ${greeny};  
  text-shadow: 2px 2px 5px rgb(255, 255, 255, 0.7);
}
`;

export const SpanLogin = styled(LinkIds)`
margin-right: 20px;
@media(max-width: 768px) {
     display:none;
  }
`;

export const MenuMobile = styled.span`
display:none;
color: yellow;
cursor: pointer;

@media(max-width: 768px) {
display: flex;
margin-top: 30px;
  }
`;

export const DivMenu = styled.div`
width: 100%;
margin: 10px 0;
font-size: 1.3rem;
font-weight: 600;
display: flex;
justify-content: center;
align-items: center;
list-style-type: none;

@media(max-width: 768px) {
  display:none;
}
`;

export const LiMenu = styled.li`
padding: 5px 25px;
border-bottom: 2px dotted pink;
background-color: white;
list-style-type: none;
`;

export const NavbarLink = styled(NavLink)`
padding: 15px 25px;
text-decoration: none;
color:${greeny};
transition: all 0.2s ease -in -out;
&:hover {
  /* border-bottom: 4px solid white;
  margin-bottom: -4px;*/
  color: ${greenyHover};
  z-index: 101;
  text-shadow: 2px 2px 5px rgba(255, 255, 140, 0.7);
}
 &:active{
  color: ${pinky};
  box-shadow: 2px 2p 2px #fffaded2;
};
`;

export const DivUser = styled.div`
font-size: 0.7rem;
display: flex;
flex-flow: row wrap;
text-align: center;
align-items: center;
margin-right: 20px;
margin-left: auto;
  margin-top: -60px;
color: #555555bb;

@media(max-width: 768px) {
  margin-top: -30px;
  margin-right: 3px;
  font-size: 0.4rem;
}
@media(max-width: 420px) {
  display: none;
}
`;
