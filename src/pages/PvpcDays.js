import { useEffect, useState } from 'react';
import { DivPvpcDays, DivBtnDay, BtnDays, DivAveragePrice, DivMinPrice, DivMaxPrice } from './PvpcDays-styled';

import { beforeDayYMD, toDayYMD, nowHour, nowMinutes, tomorroyYMD } from '../utils/time';
import { useMyContext } from '../application/Provider';


const PvpcDays = () => {
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

    useEffect(() => {
        async function startFetching(url) {
            try {
                const response = await fetch(url);
                //console.log({ response })
                if (!response.ok) {
                    throw new Error("problemas de conexión. 'Network response was not ok' ");
                } else {
                    const data = await response.json();
                    const arrObjsDailyPricesHours = data.included[0].attributes.values
                    //console.log({ arrObjsDailyPricesHours });
                    hourOfPrice(arrObjsDailyPricesHours);
                    setArrObjDaily(() => [...arrObjsDailyPricesHours]);
                    const pricePerHour = arrObjsDailyPricesHours.map(objHour => Number(objHour.value));
                    setPriceHours(pricePerHour);
                    const totalSum = pricePerHour.reduce((total, price) => total + price);
                    setAveragePrice(totalSum / 24);
                }
            }
            catch (err) { console.log('error: ', err.message) }
        }
        startFetching(URL_REE);
    }, [dayChart]);

    useEffect(() => {
        setIsActive(isActive);
    }, [dayChart]);


    useEffect(() => {
        setState({
            ...state, dayChart: dayChart, arrObjsDaily: arrObjsDaily, priceHours: priceHours, averagePriceDay: averagePrice, maxPriceDay: maxPrice, minPriceDay: minPrice
        });

    }, [dayChart, priceHours]);

    const getDayNumber = (numTDay) => {
        const dayArr = numTDay.split("T")
        const dayT = dayArr[1];
        const dayNum = dayT.substr(0, 2);
        return dayNum;
    }

    const hourOfPrice = async (arr) => {
        //arrObjsDaily
        // console.log({ arr });
        const copyArrObjsDaily = await JSON.parse(JSON.stringify(arr));

        const orderedArr = await copyArrObjsDaily.sort((a, b) => {
            //console.log("a, b", typeof a.value, typeof b.value)
            return a.value - b.value
        });

        const max = orderedArr[orderedArr.length - 1];
        //const maxP = max.value;
        await setMaxPrice(max.value);

        const maxT = max.datetime;
        const maxDay = getDayNumber(maxT);
        setMaxPriceHour(parseInt(maxDay) + " - " + (parseInt(maxDay) + 1));

        const min = orderedArr[0];
        await setMinPrice(min.value);
        const minT = min.datetime;
        const minDay = getDayNumber(minT);
        setMinPriceHour(parseInt(minDay) + " - " + (parseInt(minDay) + 1));
        //await setState({ ...state, maxPriceDay: maxPrice, minPriceDay: minPrice });
    }

    const colorBtnDay = (e) => {
        const numSel = Number(e.target.name);

        const arrBtnVal = isActive;
        const newArrBtnVal = arrBtnVal.map((nBtnVal, i) => {
            if (numSel === i) {
                return nBtnVal = true;
            } else {
                return nBtnVal = false;
            }
        });
        //console.log({ numSel }, { arrBtnVal }, { newArrBtnVal });
        setIsActive(() => newArrBtnVal);
    }

    const calcDay = (day, e) => {
        setDayChart(day);
        colorBtnDay(e);
    }

    //console.log({ state });
    return (
        <DivPvpcDays>
            <DivBtnDay>
                <BtnDays name="5" isSelected={isActive[5]} onClick={(e) => calcDay(fourDaysAgo, e)} > {fourDaysAgo}</BtnDays>
                <BtnDays name="4" isSelected={isActive[4]} onClick={(e) => calcDay(threeDaysAgo, e)} >{threeDaysAgo}</BtnDays>
                <BtnDays name="3" isSelected={isActive[3]} onClick={(e) => calcDay(twoDaysAgo, e)} >{twoDaysAgo}</BtnDays>
                <BtnDays name="2" isSelected={isActive[2]} onClick={(e) => calcDay(oneDaysAgo, e)} >{oneDaysAgo}</BtnDays>
                <BtnDays name="1" isSelected={isActive[1]} onClick={(e) => calcDay((e) => toDayYMD(), e)} >Hoy</BtnDays>
                {nowTime > 20.50 && <BtnDays name="0" isSelected={isActive[0]} onClick={(e) => calcDay((e) => tomorroyYMD(), e)}>Mañana</BtnDays>}

            </DivBtnDay>
            <br />
            <DivAveragePrice><strong>Precio medio:</strong>
                <br />
                {averagePrice.toFixed(2).replace(/\./g, ",")} €/MWh </DivAveragePrice>
            <DivMinPrice>Mínimo de <strong>{minPriceHour}h</strong>:
                <br />
                {minPrice.toFixed(2).replace(/\./g, ",")} €/MWh </DivMinPrice>
            <DivMaxPrice>Máximo de <strong>{maxPriceHour}h</strong>:
                <br />
                {maxPrice.toFixed(2).replace(/\./g, ",")} €/MWh </DivMaxPrice>
        </DivPvpcDays >
    )
}
export default PvpcDays;