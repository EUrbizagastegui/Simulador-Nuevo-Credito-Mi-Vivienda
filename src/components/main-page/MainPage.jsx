import './MainPage.css'
import { Toolbar } from 'primereact/toolbar';
import AppToolbar from '../app-toolbar/AppToolbar';
import MainPageImg from '/assets/images/main-page-img.webp';

const MainPage = () => {
    return (
        <div className='main-page-content'>
            <AppToolbar type={'main-page'} />

            <div className='main-page-content-center'>
                <img src={MainPageImg} />
                <div>
                    <h2>¿Qué es el programa Nuevo Crédito del fondo Mi Vivienda?</h2>
                    <p>
                        El programa Nuevo Crédito es una iniciativa 
                        del gobierno peruano que facilita el acceso a créditos hipotecarios 
                        para la adquisición de viviendas de interés social.
                    </p>
                </div>
                <div>
                    <h2>¿Para qué me sirve esta página?</h2>
                    <p>
                        Esta página te ofrece un simulador de cronogramas de pago para que 
                        puedas calcular y visualizar los pagos de tu crédito hipotecario bajo 
                        el Programa Nuevo Crédito del Fondo Mi Vivienda con el método del 
                        Banco de Crédito del Perú.
                    </p>
                </div>
                <div>
                    <h2>Cómo Utilizar el Simulador</h2>
                    <p>1. Registra tu cuenta e inicia sesión.</p>
                    <p>2. Clickea el botón "Agregar Cronograma"</p>
                    <p>3. Ingresa los datos solicitados.</p>
                    <p>4. Clickea el botón "Simular"</p>
                </div>
            </div>

            <Toolbar className='footer' center='© 2024 Erick Urbizagastegui - Salvador Torres' />
        </div>
    )
}

export default MainPage
