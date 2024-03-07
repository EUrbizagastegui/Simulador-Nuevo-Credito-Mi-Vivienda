import './AppToolbar.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

const AppToolbar = ({type, title}) => {
    const navigate = useNavigate();

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

    const _title = (
        <div>
            <h1>{title}</h1>
        </div>
    )

    const accesProfile = () => {
        navigate('/user-profile/' + title);
    }

    const userIcon = (
        <div>
            <i className="pi pi-user" style={{ fontSize: '2.5rem', color: 'white'}} onClick={accesProfile}></i>
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

    return type === 'main-page' ? (
        <div className='app-toolbar'>
            <Toolbar className='toolbar' start={toolbarStart} end={toolbarButtons} />
        </div>
    ) : (
        <div className='app-toolbar'>
            <Toolbar className='toolbar' start={_title} end={userIcon}/>
        </div>
    )
}

export default AppToolbar
