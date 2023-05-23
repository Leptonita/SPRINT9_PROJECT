import { useEffect, useState } from 'react';
//import LogoDS from '../assets/img/spaceships-starwars.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { OverlayLogin, Header, Form, DivInput, Input, Icon, DivBtns, ErrorMessage, BtnsIds, BtnNewAcc, DivTxtPw, DivMessage, DivTxt } from './Login-styled';
import { useNavigate } from "react-router-dom";
import { useMyContext } from '../application/Provider';
import { createItem, getItems } from '../application/api'


const Login = () => {

    const [state, setState] = useMyContext();
    const navigate = useNavigate();
    const [users, setUsers] = useState(() => {
        try {
            /* getting from localstorage
            const usersStored = JSON.parse(localStorage.getItem("usersStored")); 
            */

            //getting from firestore db
            const usersStored = getItems();
            return usersStored ? usersStored : [];
        } catch (error) {
            return []
        }
    });

    useEffect(() => {
        getUsersData();
    }, []);

    const getUsersData = async () => {
        const us = await getItems();
        setUsers(us);

    }
    //console.log("users ...........", users);

    //getting last user from localStorage    
    const [userLS, setUserLS] = useState(() => {
        const lastUser = JSON.parse(localStorage.getItem("userStored"));
        return lastUser ? lastUser : { "email": "", "password": "" };
    });

    const [email, setEmail] = useState(userLS.email);
    const [password, setPassword] = useState(userLS.password);


    const [validEmail, setValidEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [message, setMessage] = useState("Iniciar sesión con tu email y contraseña")

    useEffect(() => {

        localStorage.setItem("userStored", JSON.stringify(userLS));
        //localStorage.setItem("usersStored", JSON.stringify(users));

    }, [users, userLS]);

    useEffect(() => {
        emailValidation();
        passwordValidation();
        setUsers(async () => await getItems());
    }, []);

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/calculadora');
        }
    }, [isLoggedIn]);

    const handleEmail = (event) => {
        const inputEmail = event.target.value;

        //email no empty
        if (inputEmail !== undefined) {
            setEmail(inputEmail);
            //const userStored = ' varios probando'
            const userStored = users.find(us => us.email === inputEmail);
            //if user's email  already exists in users Array in localStorage
            if (userStored) {
                setUserLS(userStored);
            } else {
                setUserLS({ ...userLS, "email": inputEmail });
            }
        }
    }

    const handlePassword = (event) => {
        const inputPassword = event.target.value;
        //password validation
        if (inputPassword !== undefined) {
            setPassword(inputPassword);
        }
        setUserLS({ ...userLS, "password": inputPassword });
    }

    const emailValidation = () => {
        //email validation
        const expression = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        (expression.test(email)) ? setValidEmail(true) : setValidEmail(false);
        //console.log({ validEmail });
    }

    const passwordValidation = () => {
        //password validation: 8 to 12 elements
        const expression = /^.{8,12}$/;
        (expression.test(password)) ? setValidPassword(true) : setValidPassword(false);
        // console.log({ validPassword });
    }

    const handleSignup = (event) => {

        event.preventDefault();

        emailValidation();
        passwordValidation();

        //find user 
        const userStored = users.find(client => client.email === email);
        //if user's email already exists in users Array in localStorage
        if (userStored) {
            setUserLS(userStored);
            setMessage("Ya existe un usuario con este correo");
        }
        console.log({ userStored }, 'validPassword', validPassword, 'validEmail', validEmail)
        //Sign up create new user
        if (!userStored && validPassword && validEmail) {
            //add new user
            createItem({ key: email, email, password });

            setUsers([...users, { key: email, email, password }]);
            setUserLS({ ...userLS, "password": password });
            setIsLoggedIn(true);
            setMessage('¡Bienvenido!');
            console.log("email user:", email, ", password: ", password);
            setState({ ...state, user: email });

        } else {
            //check email and password for login
            setIsLoggedIn(false);
        }

    }

    const handleLogin = async (event) => {
        event.preventDefault();


        emailValidation();
        passwordValidation(); /* */
        // const userStored = ' varios probando'
        const userStored = await users.find(client => client.email === email);
        //if user's email  already exists in users Array in localStorage
        if (userStored) {
            setUserLS(userStored);

            if (userStored !== null) {
                if (userStored.password === password) {
                    console.log({ userStored }, 'logged');
                    setIsLoggedIn(true);
                    setUserLS(userStored);
                    setMessage('¡Bienvenido!');
                    setState({ ...state, user: email });
                    console.log("email user:", email, ", password: ", password);
                } else {
                    console.log({ userStored }, 'NO-logged');
                    setIsLoggedIn(false);
                    setUserLS({ ...userLS, "password": password });
                    setMessage('combinación incorrecta de correo y contraseña');
                    setState({ ...state, user: null });
                }
            }
        } else {
            setMessage('Correo electrónico no registrado');
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setEmail('');
        setPassword('');
        setUserLS(null);
        setValidEmail(false);
        setValidPassword(false);

        setIsLoggedIn(false);

    }


    return (
        <>

            <OverlayLogin /* isVisible={modalVis} */>
                <Form onSubmit={onSubmit}>
                    <Header>
                        <DivMessage>{message}</DivMessage>
                    </Header>
                    <DivInput>
                        <Input name="Email" type="email" placeholder="Correo electrónico" value={email}
                            onChange={handleEmail}
                            onKeyUp={emailValidation}
                            onBlur={emailValidation}
                            isValid={validEmail}
                        />

                        <Icon valid={validEmail}>
                            {validEmail
                                ? <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1f9e34", }} />
                                : <FontAwesomeIcon icon={faCircleXmark} style={{ color: "#f00000", }} />
                            }
                        </Icon>
                        <ErrorMessage valid={validEmail}>
                            {validEmail ? "" : "Email no válido, debe contener al menos letras o números, una @ y un . (punto)."}
                        </ErrorMessage>

                    </DivInput>

                    <DivInput>
                        <Input name="Password" type="password" placeholder="Contraseña" value={password}
                            onChange={handlePassword}
                            onKeyUp={passwordValidation}
                            onBlur={passwordValidation}
                            isValid={validPassword}
                        />
                        <Icon valid={validPassword}>
                            {validPassword
                                ? <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1f9e34", }} />
                                : <FontAwesomeIcon icon={faCircleXmark} style={{ color: "#f00000", }} />
                            }
                        </Icon>

                        <ErrorMessage valid={validPassword}>
                            {validPassword ? "" : "se requieren de 8 a 12 caracteres"}
                        </ErrorMessage>
                        <DivTxtPw>
                            ¿Olvidó su contraseña?
                        </DivTxtPw>
                    </DivInput>

                    <br />
                    <DivBtns>
                        {/* ,logC  sigC*/}
                        <BtnsIds onClick={handleLogin}> Empezar </BtnsIds>
                        <br /><br />
                        <hr />
                        <br />
                        <DivTxt>
                            ¿Aún no tiene una cuenta gratuita?</DivTxt>
                        <BtnNewAcc onClick={handleSignup}> Cree su cuenta </BtnNewAcc>



                        {/* {isLoggedIn && <div>user is logged in</div>}
                             {isLoggedIn && <div>number of users created: {users.length} </div>} 

                            {!isLoggedIn && <div>no logged yet, ...</div>}*/}
                    </DivBtns>
                </Form>
            </OverlayLogin >

        </>
    )

}
export default Login;