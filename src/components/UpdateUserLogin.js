import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { OverlayLogin, Header, Form, DivInput, Input, Icon, DivBtns, ErrorMessage, BtnsIds, DivMessage } from './Login-styled';
import { useNavigate } from "react-router-dom";

import { getItemsByCondition } from '../application/api'


const UpdateUserLogin = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);

    const [isFound, setIsFound] = useState(false);
    const [message, setMessage] = useState("Cambiar contraseña")

    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = async () => {
        const us = await getItemsByCondition("email", email);
        setUser(us);
    }

    useEffect(() => {
        emailValidation();
    }, []);

    useEffect(() => {
        if (isFound) {
            //navigate('/calculadora/');            
            navigate('/pwd/' + user[0].email);
        }
    }, [isFound]);


    const handleEmail = (event) => {
        const inputEmail = event.target.value;

        //email no empty
        if (inputEmail !== undefined) {
            setEmail(inputEmail);
        }
    }

    const emailValidation = () => {
        //email validation
        const expression = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        (expression.test(email)) ? setValidEmail(true) : setValidEmail(false);
        //console.log({ validEmail });
    }

    const handleEmailFs = async (event) => {
        event.preventDefault();
        emailValidation();

        const userStored = await getItemsByCondition("email", email)

        //if user's email  already exists 
        if (userStored) {

            if (userStored.length > 0) {
                setUser(userStored);
                console.log('TO REMOVE', 'encontrado', "id", userStored[0].id);
                setIsFound(true);
                setMessage('Te enviaremos email con instrucciones');
                console.log("email user:", email);
            } else {
                //hay que recoger error conexion FS
                setMessage('Hay un problema, email no encontrado ');
            }
        } else {
            setMessage('Correo electrónico no registrado');
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setEmail('');

        //setUserLS(null);
        setValidEmail(false);

        setIsFound(false);

    }


    return (
        <>

            <OverlayLogin>
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

                    <DivBtns>
                        {/* ,logC  sigC*/}
                        <BtnsIds onClick={handleEmailFs}> Enviar </BtnsIds>
                    </DivBtns>
                    <br />

                </Form>
            </OverlayLogin >

        </>
    )

}
export default UpdateUserLogin;