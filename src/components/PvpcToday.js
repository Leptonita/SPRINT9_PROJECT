import { useEffect, useState } from 'react';
import { LinesChart } from './LinesChart';
import { BarChart } from './BarChart';
import { BtnChartsSel, LinesBtnSel, BarBtnSel, DivChart, DivBtnDay, BtnDays } from './PvpcToday-styled';

import { beforeDayYMD, toDayYMD, nowHour, nowMinutes, tomorroyYMD } from '../utils/time';

const PvpcToday = () => {

    const [priceHours, setPriceHours] = useState([]);
    const [dayChart, setDayChart] = useState(toDayYMD());
    const [averagePrice, setAveragePrice] = useState(0);
    const [isBarsChart, setIsBarsChart] = useState(true);
    const [isActive, setIsActive] = useState(true);
    const [twoDaysAgo, setTwoDaysAgo] = useState(() => beforeDayYMD(2));
    const [threeDaysAgo, setThreeDaysAgo] = useState(() => beforeDayYMD(3));
    const [fourDaysAgo, setFourDaysAgo] = useState(() => beforeDayYMD(4));

    const nowTime = Number(nowHour()) + Number(nowMinutes() / 60);


    const URL_REE = `https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date=${dayChart}T00:00&end_date=${dayChart}T23:59&time_trunc=hour&geo_limit=peninsular&geo_ids=8741`

    useEffect(() => {
        fetch(URL_REE)
            .then(res => res.json())
            .then(res => {
                console.log({ res })
                const arrObjsDailyPricesHours = res.included[0].attributes.values
                console.log({ arrObjsDailyPricesHours });
                const pricePerHour = arrObjsDailyPricesHours.map(objHour => objHour.value)
                setPriceHours(pricePerHour);
            })
            .catch(err => console.log('error: ', err.message))
    }, [dayChart]);

    const averagePriceDay = () => {
        const totalSum = priceHours.reduce((total, price) => total + price);
        setAveragePrice(totalSum / 24);
    }

    const calcDay = (day) => {
        setDayChart(day);
        averagePriceDay();
    }


    return (
        <div>
            <DivChart>
                <BtnChartsSel>
                    <LinesBtnSel onClick={() => setIsBarsChart(false)}
                        isBarsChart={isBarsChart}>Lineas</LinesBtnSel>

                    <BarBtnSel onClick={() => setIsBarsChart(true)} isBarsChart={isBarsChart}>Barras</BarBtnSel>
                </BtnChartsSel>
                <div className="chart-container" >


                    {isBarsChart
                        ? <BarChart pricePerHour={priceHours} dayChart={dayChart} />
                        : <LinesChart pricePerHour={priceHours} dayChart={dayChart} />}
                </div>
                <DivBtnDay>
                    <BtnDays onClick={() => calcDay(fourDaysAgo)} > {fourDaysAgo}</BtnDays>
                    <BtnDays onClick={() => calcDay(threeDaysAgo)} >{threeDaysAgo}</BtnDays>
                    <BtnDays onClick={() => calcDay(twoDaysAgo)} >{twoDaysAgo}</BtnDays>
                    <BtnDays onClick={() => calcDay(() => beforeDayYMD(1))} >Ayer</BtnDays>
                    <BtnDays onClick={() => calcDay(() => toDayYMD())} >Hoy</BtnDays>
                    {nowTime > 20.27 && <BtnDays onClick={() => calcDay(() => tomorroyYMD())}>Mañana</BtnDays>}
                </DivBtnDay>

                <div>Precios por hora (€/MWh) para {dayChart} <br />
                    según la tarifa regulada PVPC (Precio voluntario para el pequeño consumidor) del mercado eléctrico español, a nivel peninsular</div>
                <div>Precio medio: {averagePrice.toFixed(2)}€/MWh </div>
            </DivChart >
        </div >
    )
}
export default PvpcToday;