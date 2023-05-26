import { useState } from "react";
import { DivContent, DivCalc, CenteredDiv, DivBtnCalc, DivResults, BtnCalc, InputCalc } from './Calculadora-styled';
import { useMyContext } from '../application/Provider';

const Calculadora = () => {
    const [state, setState] = useMyContext();
    const [deviceName, setDeviceName] = useState("");
    const [powerInput, setPowerInput] = useState(0);
    const [timeConnectedInput, setTimeConnectedInput] = useState(0);
    const [priceElecInput, setPriceElecInput] = useState(0.15);
    const [eConsumption, setEConsumption] = useState(null);
    const [eTotalCost, setETotalCost] = useState(0);

    const [averageTotalCost, setAverageTotalCost] = useState(0);
    const [minTotalCost, setMinTotalCost] = useState(0);
    const [maxTotalCost, setMaxTotalCost] = useState(0);

    const calcConsumptionCost = () => {
        setEConsumption(powerInput / 1000 * timeConnectedInput);
        setETotalCost(powerInput / 1000 * timeConnectedInput * priceElecInput);
        setAverageTotalCost(powerInput / 1000 * timeConnectedInput * state.averagePriceDay / 1000);
        setMinTotalCost(powerInput / 1000 * timeConnectedInput * state.minPriceDay / 1000);
        setMaxTotalCost(powerInput / 1000 * timeConnectedInput * state.maxPriceDay / 1000);
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
                    <InputCalc type="text" id="device" name="device" onChange={e => setDeviceName(e.target.value)} placeholder="nombre del aparato" size={27} />
                </div>
                <div>
                    <label htmlFor="power">Potencia del dispositivo (W): </label>
                    <InputCalc type="text" id="power" name="power" onChange={e => setPowerInput(e.target.value)} placeholder="en vatios (W)" maxLength={5} size={9} />
                </div>
                <div>
                    <label htmlFor="timeConnected">Horas encendido: </label>
                    <InputCalc type="text" id="timeConnected" name="timeConnected" onChange={e => setTimeConnectedInput(e.target.value)} placeholder="tiempo" maxLength={2} size={3} />
                </div>
                <br />
                <div><strong>Precio de la electricidad</strong></div>
                <div>
                    <label htmlFor="priceElecInput">Según tarifa mercado libre: </label>
                    <InputCalc type="text" id="priceElecInput" name="priceElecInput" onChange={e => setPriceElecInput(e.target.value)} placeholder="precio electricidad" value={priceElecInput} maxLength={7} size={5} /> <span> €/kWh</span>
                </div>
                <div>
                    Precio PVPC medio: {(state.averagePriceDay / 1000).toFixed(4)} €/kWh
                </div>

                {/*  <div>
                    Precio PVPC mínimo: {(state.minPriceDay / 1000).toFixed(4)} €/kWh
                </div>
                <div>
                    Precio PVPC máximo: {(state.maxPriceDay / 1000).toFixed(4)} €/kWh
                </div> */}
                <DivBtnCalc>
                    <BtnCalc onClick={calcConsumptionCost}>calcular</BtnCalc>
                </DivBtnCalc>
                <DivResults>
                    <div>consumo eléctrico: {eConsumption} kW</div>
                    <br />
                    <div><strong>Coste total</strong></div>
                    <div>según mercado libre: {eTotalCost.toFixed(3)} €</div>

                    <div>según PVPC medio: {averageTotalCost.toFixed(3)} €</div>
                    <div>según PVPC mínimo: {minTotalCost.toFixed(3)} €</div>
                    <div>según PVPC máximo: {maxTotalCost.toFixed(3)} €</div>
                </DivResults>
            </DivCalc>
        </DivContent>
    )
}

export default Calculadora;