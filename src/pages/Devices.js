import { OverlayD, DivDevices, DivCloseIcon } from './Devices-styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export const Devices = ({ setViewDevices }) => {

    return (
        <OverlayD onClick={() => setViewDevices(false)}>

            <DivDevices>
                <DivCloseIcon>
                    <FontAwesomeIcon onClick={() => setViewDevices(false)} icon={faCircleXmark} size="2xl" style={{ cursor: "pointer", "--fa-primary-color": "#9fdfa7", "--fa-secondary-color": "rgb(0, 169, 140)", }} />
                </DivCloseIcon>

                <div onClick={(e) => e.stopPropagation()}>
                    <div>
                        Revise la etiqueta de eficiencia energética de su dispositivo para conocer su potencia.<br />
                        <br />
                    </div>
                    <strong> La potencia de los aparatos más habituales:</strong>
                    <br />
                    <br />
                    Aire acondicionado: 1.000 - 2.000 W.
                    <br />
                    Aspiradora: 1.000 - 1.500 W.
                    <br />
                    Bombilla fluorescente: 8 - 24 W.
                    <br />
                    Bombilla incandescente: 40 - 100 W.
                    <br />
                    Bombilla LED: 5 - 16 W.
                    <br />
                    Calefacción: 1.000 - 3.000 W.
                    <br />
                    Frigorífico: 250 - 350 W.
                    <br />
                    Horno: 1.000 - 2.500 W.
                    <br />
                    Lavadora: 1.500 - 2.500 W.
                    <br />
                    Lavavajillas: 1.500 - 2.500 W.
                    <br />
                    Microondas: 700 - 1.500 W.
                    <br />
                    Ordenador: 80 - 150 W.
                    <br />
                    Router: 16 W.
                    <br />
                    Televisión: 200 - 400 W.
                    <br />
                    Termo eléctrico: 1.200 W.
                    <br />
                    Ventilador: 100 W.
                    <br />
                    Vitrocerámica: 1.500 - 2.500 W.
                </div>

            </DivDevices>

        </OverlayD>
    )
}
export default Devices;