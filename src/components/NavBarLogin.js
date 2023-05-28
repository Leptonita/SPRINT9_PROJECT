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
    const [loginIsClicked, setLoginIsClicked] = useState(false);
    const [signupIsClicked, setSignupIsClicked] = useState(false);
    const [modalState, setModalState] = useState(false);

    const showModalLogin = () => {
        setLoginIsClicked((c) => !c);
        setModalState((m) => !m);
        setSignupIsClicked(false);
    }

    const showModalSignUp = () => {
        setSignupIsClicked((c) => !c);
        setModalState((m) => !m);
        setLoginIsClicked(false);
    }

    return (

        <DivBarGridLogin>
            <DivImg>
                <LogoImg src={logo} alt="eMWcalc" />
            </DivImg>
            <DivLoginLeft>
                <MenuMobile>
                    <FontAwesomeIcon onClick={() => { setIsActive(!isActive) }} icon={faBars} size="2xl" style={{ color: "#ffea00", }} />
                </MenuMobile>
                {isActive && (
                    <DivLoginLeftLinks>
                        <br />
                        <p onClick={showModalLogin}><LinkIds>LOGIN</LinkIds> </p>
                        {loginIsClicked &&
                            <Login
                                modalVis={modalState} changeModalVis={setModalState}
                                modalLog={loginIsClicked} changeLogClick={setLoginIsClicked}
                                modalSign={signupIsClicked} changeSignClick={setSignupIsClicked}
                            />}
                        <br />
                        <p onClick={showModalSignUp}><LinkIds>SIGN UP</LinkIds> </p>
                        {signupIsClicked &&
                            <Login
                                modalVis={modalState} changeModalVis={setModalState}
                                modalLog={loginIsClicked} changeLogClick={setLoginIsClicked}
                                modalSign={signupIsClicked} changeSignClick={setSignupIsClicked}
                            />}
                    </DivLoginLeftLinks>
                )}

            </DivLoginLeft>

            <DivMenu id='menu'>
                <NavbarLink
                    style={{
                    }}
                    to="/">
                    HOME <LiMenu></LiMenu>
                </NavbarLink>

                <NavbarLink
                    style={{
                    }}
                    to="/pvpc">
                    PVPC<LiMenu></LiMenu>
                </NavbarLink>
                <NavbarLink
                    style={{
                    }}
                    to="/calculadora">
                    CALCULADORA<LiMenu></LiMenu>
                </NavbarLink>
                <NavbarLink
                    style={{
                    }}
                    to="/login">
                    LOGIN<LiMenu></LiMenu>
                </NavbarLink>
            </DivMenu >

            <DivLoginRight>
                {/* <DivLogin>
                    <SpanLogin onClick={showModalLogin}>LOG IN </SpanLogin>
                    {loginIsClicked &&
                        <Login
                            modalVis={modalState} changeModalVis={setModalState}
                            modalLog={loginIsClicked} changeLogClick={setLoginIsClicked}
                            modalSign={signupIsClicked} changeSignClick={setSignupIsClicked}
                        />}

                    <SpanLogin onClick={showModalSignUp}> SIGN UP</SpanLogin>
                    {signupIsClicked &&
                        <Login
                            modalVis={modalState} changeModalVis={setModalState}
                            modalLog={loginIsClicked} changeLogClick={setLoginIsClicked}
                            modalSign={signupIsClicked} changeSignClick={setSignupIsClicked}
                        />}
                </DivLogin> */}
                <DivUser> {userLogged ? "usuario: " + userLogged : ""}</DivUser>
            </DivLoginRight>
            <br />
        </DivBarGridLogin>
    )
}
export default NavBarLogin;