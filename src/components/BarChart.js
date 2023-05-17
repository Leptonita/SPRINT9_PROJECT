import { Bar } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


export function BarChart({ pricePerHour, dayChart }) {

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'PVPC - Península para ' + dayChart,
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'horas'
                }
            },
            y: {
                title: {
                    display: true,
                    text: '€/MWh'
                },
                suggestedMin: 0,
                suggestedMax: 200,
                ticks: {
                    // forces step size to be 50 units
                    stepSize: 30
                }
            }
        }
    };

    const horas = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23h'];
    const data = {
        labels: horas,
        datasets: [
            {
                fill: true,
                label: 'Precios (€/MWh)',
                data: pricePerHour,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    return <Bar options={options} data={data} />;
}