import './MainPage.css'
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const MainPage = () => {
    const [toolbarStart, setToolbarStart] = useState(null);

    const toolbarTitle = (
        <div>
            <h1>Simulador de Cronogramas de Pago</h1>
        </div>
    )
    const toolbarIcon = (
        <div>
            <svg width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                <path d="M16 3l0 4" />
                <path d="M8 3l0 4" />
                <path d="M4 11l16 0" />
                <path d="M8 15h2v2h-2z" />
            </svg>
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

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 650) {
                setToolbarStart(toolbarIcon);
            } else {
                setToolbarStart(toolbarTitle);
            }
        };

        // Llama a handleResize cuando la ventana cambia de tamaño
        window.addEventListener('resize', handleResize);

        // Llama a handleResize al cargar la página
        handleResize();

        // Limpia el event listener al desmontar el componente
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return (
        <div className='main-page-content'>
            <Toolbar className='toolbar' start={toolbarStart} end={toolbarButtons} />
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
