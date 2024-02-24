import './MainPage.css'
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

const MainPage = () => {
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
        <div>
            <Toolbar className='toolbar' end={toolbarButtons} />
            <header>
                <h1>Simulador de Cronogramas de Pago</h1>
            </header>
            <section>
                <h2>¿Qué es el Programa Nuevo Crédito del Fondo Mi Vivienda?</h2>
                <p>
                    El Programa Nuevo Crédito del Fondo Mi Vivienda es una iniciativa 
                    del gobierno peruano que facilita el acceso a créditos hipotecarios 
                    para la adquisición de viviendas de interés social.
                </p>
            </section>
                <h2>¿Para qué me sirve esta página?</h2>
                <p>
                    Esta página te ofrece un simulador de cronogramas de pago para que 
                    puedas calcular y visualizar los pagos de tu crédito hipotecario bajo 
                    el Programa Nuevo Crédito del Fondo Mi Vivienda con el método del 
                    Banco de Crédito del Perú. Con esta herramienta, podrás planificar 
                    mejor tus finanzas y tomar decisiones informadas sobre 
                    la compra de tu vivienda.
                </p>
            <section>
                <h2>Cómo Utilizar el Simulador</h2>
                <ol>
                    <li>Registra tu cuenta e inicia sesión.</li>
                    <li>Clickea el botón "Agregar Cronograma"</li>
                    <li>Ingresa los datos solicitados.</li>
                    <li>Clickea el botón "Simular"</li>
                </ol>
            </section>
        </div>
    )
}

export default MainPage
