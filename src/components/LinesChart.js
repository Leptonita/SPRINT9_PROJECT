import { Line } from 'react-chartjs-2';
//import faker from 'faker';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};


const preciosDiarios = [0, 10, 27, 31, 45, 59, 66, 79, 89, 93, 10, 110, 129]

/* export const data = {
    labels: meses,
    datasets: [
        {
            label: 'Precios',
            data: preciosDiarios ,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },

    ],
}; */

export function LinesChart({ pricePerHour }) {

    const horas = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
    const data = {
        labels: horas,
        datasets: [
            {
                label: 'Precios PVPC - Península',
                data: pricePerHour,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },

        ],
    };

    return <Line options={options} data={data} />;
}