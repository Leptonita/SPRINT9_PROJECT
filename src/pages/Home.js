import { DivContent, DivHome, DivIntro1, DivImg, ImgAhorro } from './Home-styled';
import ilustration from '../assets/img/CALC-CONTADOR-3.jpg'

const Home = () => {

    return (
        <DivContent>
            <DivHome>
                <h1>Calcula y Ahorra</h1>
                < DivIntro1>
                    <br />
                    En un mundo cada vez más preocupado por el cuidado del medio ambiente y la búsqueda de fuentes de energía sostenibles, el consumo eléctrico se ha convertido en un tema de gran relevancia. La forma en que utilizamos la electricidad en nuestros hogares y lugares de trabajo puede marcar la diferencia en términos de eficiencia energética y ahorro económico.
                </ DivIntro1>
                <div>
                    <br />
                    El ahorro en el consumo eléctrico no sólo implica cambiar hábitos de uso, sino también comprender y controlar el gasto energético de nuestros dispositivos y electrodomésticos.
                    <br />
                    <br />
                    En esta aplicación ofrecemos algunas herramientas para conocer y calcular el consumo y gasto energético, y así ayudar a promover un estilo de vida más sostenible mientras aliviamos la carga económica.
                </div>
            </DivHome>
            <DivImg>
                <ImgAhorro src={ilustration} alt="Ahorro" />
            </DivImg>
        </DivContent>
    )
}
export default Home;