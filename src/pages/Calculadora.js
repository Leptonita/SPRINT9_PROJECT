import { useState } from "react";
import { DivContent, DivCalc, CenteredDiv, DivBtnCalc, DivResults, BtnCalc } from './Calculadora-styled';
import { useMyContext } from '../application/Provider';

const Calculadora = () => {
    const [state, setState] = useMyContext();
    const [deviceName, setDeviceName] = useState("");
    const [powerInput, setPowerInput] = useState(0);
    const [timeConnectedInput, setTimeConnectedInput] = useState(0);
    const [priceElecInput, setPriceElecInput] = useState(0);
    const [eConsumption, setEConsumption] = useState(null);
    const [eTotalCost, setETotalCost] = useState(null);

    const calcConsumptionCost = () => {
        setEConsumption(powerInput / 1000 * timeConnectedInput);
        setETotalCost(powerInput / 1000 * timeConnectedInput * priceElecInput);
    }

    return (
        <DivContent>
            <DivCalc>
                <CenteredDiv>
                    <h1>    Calculadora energética</h1>

                </CenteredDiv>
                <br />
                <div>
                    <label htmlFor="device">DISPOSITIVO: </label>
                    <input type="text" id="device" name="device" onChange={e => setDeviceName(e.target.value)} placeholder="nombre del aparato" />
                </div>
                <div>
                    <label htmlFor="power">Potencia del dispositivo(W): </label>
                    <input type="text" id="power" name="power" onChange={e => setPowerInput(e.target.value)} placeholder="Potencia en vatios (W)" />
                </div>
                <div>
                    <label htmlFor="timeConnected">Tiempo conectado a la corriente (h): </label>
                    <input type="text" id="timeConnected" name="timeConnected" onChange={e => setTimeConnectedInput(e.target.value)} placeholder="tiempo en horas" />
                </div>
                <div>
                    <label htmlFor="priceElecInput">Precio de la electricidad (€/kWh): </label>
                    <input type="text" id="priceElecInput" name="priceElecInput" onChange={e => setPriceElecInput(e.target.value)} placeholder="precio electricidad" />
                </div>
                <div>
                    Precio PVPC medio: {(state.averagePriceDay / 1000).toFixed(4)} €/kWh
                </div>

                <div>
                    Precio PVPC mínimo: {(state.minPriceDay / 1000).toFixed(4)} €/kWh
                </div>
                <div>
                    Precio PVPC máximo: {(state.maxPriceDay / 1000).toFixed(4)} €/kWh
                </div>
                <DivBtnCalc>
                    <BtnCalc onClick={calcConsumptionCost}>calcular</BtnCalc>
                </DivBtnCalc>
                <DivResults>
                    <div>consumo eléctrico: {eConsumption} kW</div>
                    <div>coste total: {eTotalCost} €</div>
                </DivResults>
            </DivCalc>
        </DivContent>
    )
}

export default Calculadora;