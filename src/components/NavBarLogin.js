import { useState } from 'react';
import logo from '../assets/img/emwhat.png';
import { DivBarGridLogin, DivImg, LogoImg, DivLoginRight, DivLogin, DivLoginLeft, DivLoginLeftLinks, LinkIds, SpanLogin, MenuMobile, DivUser } from './NavBar-styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Login from './Login';

import { DivMenu, LiMenu, NavbarLink } from './NavBar-styled';

import { useMyContext } from '../application/Provider';

const NavBarLogin = () => {

    const [state, setState] = useMyContext();
    const userLogged = state.user;

    const [isActive, setIsActive] = useState(false);


    return (

        <DivBarGridLogin>

            <DivLoginLeft>
                <MenuMobile className='menumobile'>
                    <FontAwesomeIcon onClick={() => { setIsActive(!isActive) }} icon={faBars} size="2xl" style={{ color: "#ffea00", }} />
                </MenuMobile>
                {isActive && (
                    <DivLoginLeftLinks>
                        <NavbarLink
                            style={{
                            }}
                            to="/" onClick={() => { setIsActive(!isActive) }}>
                            <LiMenu>HOME </LiMenu>
                        </NavbarLink>

                        <NavbarLink
                            style={{
                            }}
                            to="/pvpc" onClick={() => { setIsActive(!isActive) }}>
                            <LiMenu>PVPC</LiMenu>
                        </NavbarLink>
                        <NavbarLink
                            style={{
                            }}
                            to="/calculadora" onClick={() => { setIsActive(!isActive) }}>
                            <LiMenu>CALCULADORA</LiMenu>
                        </NavbarLink>
                        <NavbarLink
                            style={{}}
                            to="/login" onClick={() => { setIsActive(!isActive) }}>
                            <LiMenu>LOGIN</LiMenu>
                        </NavbarLink>
                        <br /><br />
                    </DivLoginLeftLinks>
                )}

            </DivLoginLeft>

            <DivImg>
                <LogoImg src={logo} alt="eMWcalc" />
            </DivImg>

            <DivMenu id='menu'>
                <NavbarLink
                    style={{
                    }}
                    to="/">
                    HOME
                </NavbarLink>

                <NavbarLink
                    style={{
                    }}
                    to="/pvpc">
                    PVPC
                </NavbarLink>
                <NavbarLink
                    style={{
                    }}
                    to="/calculadora">
                    CALCULADORA
                </NavbarLink>
                <NavbarLink
                    style={{
                    }}
                    to="/login">
                    LOGIN
                </NavbarLink>
            </DivMenu >

            <DivLoginRight>
                {/* <DivLogin></DivLogin>
                <NavbarLink
                    style={{ listStyle: "none", }}
                    to="/login">
                    <LiMenu>LOGIN</LiMenu>
                </NavbarLink>
*/}
                <DivUser> {userLogged ? "usuario: " + userLogged : ""}</DivUser>
            </DivLoginRight>
            <br />
        </DivBarGridLogin >
    )
}
export default NavBarLogin;