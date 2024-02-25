import './MainPage.css'
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

const MainPage = () => {
    const toolbarTitle = (
        <div>
            <h1>Simulador de Cronogramas de Pago</h1>
        </div>
    )
    const toolbarButtons = (
        <>
            <Link to="/log-in">
                <Button className='toolbar-button' label='Iniciar Sesión' />
            </Link>
            <Link to="/register">
                <Button className='toolbar-button' label='Registarse' />
            </Link>
        </>
    )
    return (
        <div className='main-page-content'>
            <Toolbar className='toolbar' start={toolbarTitle} end={toolbarButtons} />
            <div className='main-page-content-center'>
                <img src="../../src/assets/images/main-page-img.webp" alt="Hero image" />
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
                        Banco de Crédito del Perú. Con esta herramienta, podrás planificar 
                        mejor tus finanzas y tomar decisiones informadas sobre 
                        la compra de tu vivienda.
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
