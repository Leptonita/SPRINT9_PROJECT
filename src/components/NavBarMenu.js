import { useMatch } from 'react-router-dom';
import { UlMenu, LiMenu, NavbarLink } from './NavBar-styled';
import { useState } from 'react';
import { useMyContext } from '../application/Provider';
import Login from './Login';

const NavBarMenu = () => {
    const [state, setState] = useMyContext();
    const logged = !!state.user;

    //console.log("state.home", state.home)
    //const logged = false;
    //inicializo para las 3 el context (!!state.user) para que se abra la ventana automáticamente si no está logeado.
    //si sólo quiero activar la pantalla de login con boton, entonces los 3 se inicializan en false

    const [loginIsClicked, setLoginIsClicked] = useState(!logged);
    const [signupIsClicked, setSignupIsClicked] = useState(!logged);
    const [modalState, setModalState] = useState(!logged);

    /* useEffect(() => {
        setModalState(!logged);
    }, []) */

    const showModalLogin = () => {
        setLoginIsClicked((c) => !c);
        setModalState((m) => !m);
        setSignupIsClicked((c) => !c);
    }

    const showModalSignUp = () => {
        setSignupIsClicked((c) => !c);
        setModalState((m) => !m);
        setLoginIsClicked((c) => !c);
        console.log(modalState)
    }


    //console.log({ logged })
    return (
        <>

            <UlMenu>
                <NavbarLink
                    style={{
                    }}
                    to="/">
                    <LiMenu> HOME </LiMenu>
                </NavbarLink>

                <NavbarLink
                    style={{
                    }}
                    to="/pvpc">
                    <LiMenu> PVPC</LiMenu>
                </NavbarLink>
            </UlMenu >
            {modalState && < Login
                modalVis={modalState} changeModalVis={setModalState}
                modalLog={loginIsClicked} changeLogClick={setLoginIsClicked}
                modalSign={signupIsClicked} changeSignClick={setSignupIsClicked}
            />}
        </>
    )
}
export default NavBarMenu;