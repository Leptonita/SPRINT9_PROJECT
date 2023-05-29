import { useState, useRef } from "react";
import { DivContent, TiText, DivCalc, DivInputs, CenteredDiv, DivBtnCalc, DivResults, BtnCalc, InputCalc, ErrorMessage, DivResultsCost, DivResultCost, Result } from './Calculadora-styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { useMyContext } from '../application/Provider';
import Devices from "./Devices";

const Calculadora = () => {
    const [state, setState] = useMyContext();
    const [deviceName, setDeviceName] = useState("");
    const [powerInput, setPowerInput] = useState(0);
    const [timeConnectedInput, setTimeConnectedInput] = useState(0);
    const [validPotencia, setValidPotencia] = useState(false);
    const [validTime, setValidTime] = useState(false);
    const [priceElecInput, setPriceElecInput] = useState(0.187);
    const [eConsumption, setEConsumption] = useState(0);
    const [eTotalCost, setETotalCost] = useState(0);

    const [averageTotalCost, setAverageTotalCost] = useState(0);
    const [minTotalCost, setMinTotalCost] = useState(0);
    const [maxTotalCost, setMaxTotalCost] = useState(0);
    const [viewDevices, setViewDevices] = useState(false);

    const resultsRef = useRef();

    const calcConsumptionCost = () => {
        if (powerInput === 0 || powerInput === "") {
            setValidPotencia(false);
        } else { setValidPotencia(true); };

        if (timeConnectedInput === 0 || timeConnectedInput === "") {
            setValidTime(false);
        } else { setValidTime(true); };


        setEConsumption(powerInput / 1000 * timeConnectedInput);
        setETotalCost(powerInput / 1000 * timeConnectedInput * priceElecInput);
        setAverageTotalCost(powerInput / 1000 * timeConnectedInput * state.averagePriceDay / 1000);
        setMinTotalCost(powerInput / 1000 * timeConnectedInput * state.minPriceDay / 1000);
        setMaxTotalCost(powerInput / 1000 * timeConnectedInput * state.maxPriceDay / 1000);

        resultsRef.current.scrollIntoView({ block: "end", behavior: "smooth" })
    }

    return (
        <DivContent>
            <DivCalc>
                <CenteredDiv>
                    <h1>    Calculadora energética</h1>
                </CenteredDiv>
                <br />
                <DivInputs>
                    <label htmlFor="device">DISPOSITIVO: </label>
                    <InputCalc type="text" id="device" name="device" onChange={e => setDeviceName(e.target.value)} placeholder="nombre del aparato" size={27} />
                </DivInputs>
                <DivInputs>
                    <label htmlFor="power">Potencia (W): </label>
                    <InputCalc type="text" id="power" name="power" onChange={e => setPowerInput(e.target.value)} placeholder="en vatios (W)" maxLength={5} size={9}
                        autoFocus /> <FontAwesomeIcon onClick={() => setViewDevices(true)} icon={faCircleInfo} />
                    {viewDevices && <Devices setViewDevices={setViewDevices} />}
                    <ErrorMessage valid={validPotencia}>
                        {validPotencia ? "" : "¿Cuál es la potencia del equipo?"}
                    </ErrorMessage>
                </DivInputs>
                <DivInputs>
                    <label htmlFor="timeConnected">Horas encendido: </label>
                    <InputCalc type="text" id="timeConnected" name="timeConnected" onChange={e => setTimeConnectedInput(e.target.value)} placeholder="tiempo" maxLength={2} size={3} />

                    <ErrorMessage valid={validTime}>
                        {validTime ? "" : "¿Cuantas horas está en funcionamiento?"}
                    </ErrorMessage>
                </DivInputs>
                <br />
                <TiText><strong>Precio de la electricidad</strong></TiText>
                <DivInputs>
                    <label htmlFor="priceElecInput">Precio mercado libre: </label>
                    <InputCalc type="text" id="priceElecInput" name="priceElecInput" onChange={e => setPriceElecInput(e.target.value)} placeholder="precio electricidad" value={priceElecInput} maxLength={7} size={5} /><span>€/kWh</span>
                </DivInputs>
                <DivInputs>
                    PVPC medio:&nbsp; <div>{(state.averagePriceDay / 1000).toFixed(4)} €/kWh</div>
                </DivInputs>

                {/*  <div>
                    Precio PVPC mínimo: {(state.minPriceDay / 1000).toFixed(4)} €/kWh
                </div>
                <div>
                    Precio PVPC máximo: {(state.maxPriceDay / 1000).toFixed(4)} €/kWh
                </div> */}
                <DivBtnCalc>
                    <BtnCalc onClick={calcConsumptionCost}>calcular</BtnCalc>
                </DivBtnCalc>
                <DivResults ref={resultsRef}>
                    <TiText><strong> Consumo eléctrico:</strong></TiText>
                    <div>{eConsumption.toFixed(2)} kW</div>
                    <br />
                    <DivResultsCost>
                        <TiText><strong>Coste total: </strong><br /><br /></TiText>
                        <DivResultsCost>
                            <DivResultCost>
                                <Result color="#63beffa7">{eTotalCost.toFixed(2)} €
                                </Result>
                                mercado libre
                            </DivResultCost>

                            <DivResultCost>
                                <Result color="#ffb91d">{averageTotalCost.toFixed(2)} €
                                </Result>
                                PVPC medio
                            </DivResultCost>
                            <DivResultCost>
                                <Result color="rgb(92, 180, 72)">{minTotalCost.toFixed(2)} €
                                </Result>
                                PVPC mínimo
                            </DivResultCost>
                            <DivResultCost>
                                <Result color="rgba(255, 99, 132,1)">{maxTotalCost.toFixed(2)} €
                                </Result>
                                PVPC máximo
                            </DivResultCost>
                        </DivResultsCost>
                    </DivResultsCost>
                </DivResults>
            </DivCalc>
        </DivContent>
    )
}

export default Calculadora;