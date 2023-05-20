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
grid-template-columns: 1fr 1fr 1fr 1fr ;
align-items: center;
padding: 10px 30px;
background-color: rgba(255,185,29,0.67);
border-bottom: 2px solid ${pinkyBorder};
box-shadow: 2px 2px 9px gray;
@media(max-width: 768px) {
    padding: 20px;
  }
`;
export const DivImg = styled.div`
display: flex;
justify-content: center;
`;

export const LogoImg = styled.img`
width: 210px ;
margin: 10px auto;
@media(max-width: 768px) {
    min-width: 140px;
    margin-right: 5px;
  }
`;
export const DivLoginLeft = styled.div`
visibility: hidden;

@media(max-width: 768px) {
    visibility: visible;
    display: block;
    min-width: 100px;
  }
`;
export const DivLoginLeftLinks = styled.div`
display:none;

@media(max-width: 768px) {
    display: block;
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
align-content: flex-end;
margin-left: auto;
  }
`;

export const UlMenu = styled.ul`
width: 100%;
margin: 20px 0;
font-size: 1.3rem;
font-weight: 600;
display: flex;
justify-content: center;
align-items: center;
list-style-type: none;
`;

export const LiMenu = styled.li`
padding: 15px 25px;
color:${greeny};
  transition: all 0.2s ease-in-out;
/* border-right: 2px solid ${greyBorder};
&:first-child {
    border-left: 2px solid ${greyBorder};
} */

&:hover {
    /* border-bottom: 4px solid white; 
    margin-bottom: -4px;*/
    color: ${greenyHover};
    z-index: 10;
    text-shadow: 2px 2px 5px rgba(255, 255, 140, 0.7);
}
 &:active{
    color: ${pinky};
    box-shadow: 2px 2p 2px #fffaded2;
}; 
`;

export const NavbarLink = styled(NavLink)`
/* padding: 15px 25px; */
color: #a7aaaa;
text-decoration: none;

`;

export const DivUser = styled.div`
font-size: 0.7rem;
display: flex;
flex-flow: row wrap;
text-align: center;
margin-right: 20px;
margin-left: auto;
color: #555555;

@media(max-width: 768px) {
  margin-top: -30px;
margin-right: 3px;
font-size: 0.4rem;
  }
  @media(max-width: 420px) {
  display: none;
  }
`;
