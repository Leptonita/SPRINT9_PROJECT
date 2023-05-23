import { useEffect, useState } from 'react';
import { LinesChart } from '../components/LinesChart';
import { BarChart } from '../components/BarChart';
import { DivPvpc, BtnChartsSel, LinesBtnSel, BarBtnSel, DivChart, DivBtnDay, BtnDays, DivTxt, DivAveragePrice, DivMinPrice, DivMaxPrice } from './PvpcCharts-styled';

import { beforeDayYMD, toDayYMD, nowHour, nowMinutes, tomorroyYMD } from '../utils/time';
import { useMyContext } from '../application/Provider';


const PvpcCharts = () => {
    const [state, setState] = useMyContext();
    const [arrObjsDaily, setArrObjDaily] = useState([]);
    const [priceHours, setPriceHours] = useState([0]);
    const [dayChart, setDayChart] = useState(toDayYMD());
    const [averagePrice, setAveragePrice] = useState(0);
    const [minPrice, setMinPrice] = useState(0);
    const [minPriceHour, setMinPriceHour] = useState(null);
    const [maxPrice, setMaxPrice] = useState(0);
    const [maxPriceHour, setMaxPriceHour] = useState(null);
    const [isBarsChart, setIsBarsChart] = useState(true);
    //isActive 0 tomorroy, 1 today, 2 yesterday, ...
    const [isActive, setIsActive] = useState([false, true, false, false, false, false]);
    const [oneDaysAgo, setOneDaysAgo] = useState(() => beforeDayYMD(1));
    const [twoDaysAgo, setTwoDaysAgo] = useState(() => beforeDayYMD(2));
    const [threeDaysAgo, setThreeDaysAgo] = useState(() => beforeDayYMD(3));
    const [fourDaysAgo, setFourDaysAgo] = useState(() => beforeDayYMD(4));

    const nowTime = Number(nowHour()) + Number(nowMinutes() / 60);

    const URL_REE = `https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date=${dayChart}T00:00&end_date=${dayChart}T23:59&time_trunc=hour&geo_limit=peninsular&geo_ids=8741`


    // console.log({ state });
    return (
        <DivPvpc>
            <DivChart>
                <BtnChartsSel>
                    <LinesBtnSel onClick={() => setIsBarsChart(false)}
                        isBarsChart={isBarsChart}>Lineas</LinesBtnSel>

                    <BarBtnSel onClick={() => setIsBarsChart(true)} isBarsChart={isBarsChart}>Barras</BarBtnSel>
                </BtnChartsSel>
                <div className="chart-container" >


                    {isBarsChart
                        ? <BarChart pricePerHour={state.priceHours} dayChart={dayChart} />
                        : <LinesChart pricePerHour={state.priceHours} dayChart={dayChart} />}
                </div>

            </DivChart >
            <DivTxt>
                <strong>Término de facturación por energía consumida (término variable, sin impuestos)</strong><br /> <br /> Estos precios (€/MWh) fluctúan según las fracciones horarias{/* . Para <strong>{dayChart}</strong>, a nivel peninsular,*/}  de acuerdo a la tarifa regulada PVPC (Precio voluntario para el pequeño consumidor) del mercado eléctrico español. Estos datos han sido proporcionados por REE.
            </DivTxt >
        </DivPvpc >
    )
}
export default PvpcCharts;