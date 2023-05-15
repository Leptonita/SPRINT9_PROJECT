import { useEffect, useState } from 'react';
import { LinesChart } from './LinesChart';

import { toDayYMD, nowHour, nowMinutes, tomorroyYMD } from '../utils/time';

const PvpcToday = () => {

    const [priceHours, setPriceHours] = useState([]);
    const [dayChart, setDayChart] = useState(toDayYMD());

    const nowTime = Number(nowHour()) + Number(nowMinutes() / 60);

    //const daySelected = toDayString;
    //const daySelected = "2023-05-15";
    //const daySelected = toDayYMD();
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
    }, [])

    return (
        <div>

            <button onClick={() => setDayChart(() => toDayYMD())} >Today</button>

            {nowTime > 20.25 && <button onClick={() => setDayChart(() => tomorroyYMD())}>Tomorrow</button>}

            <LinesChart pricePerHour={priceHours} />

            <div>Precios para {dayChart} por hora <br />
                según la tarifa regulada PVPC (Precio voluntario para el pequeño consumidor) del mercado eléctrico español, a nivel peninsular</div>
        </div>
    )
}
export default PvpcToday;