import './LogIn.css'
import { useState } from 'react';
import LabelInput from '../label-input/LabelInput';
import { Button } from 'primereact/button';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const information = [
        ['email', 'Correo electrónico', email, setEmail],
        ['password', 'Contraseña', password, setPassword]
    ]

    return (
        <div className='log-in'>
            <div>
                <h1>¡Bienvenido de vuelta!</h1>
                <p>Con nuestro simulador, puedes obtener una estimación del cronograma de pagos para tu crédito del programa Nuevo Crédito del fondo Mi Vivienda en Perú.</p>
            </div>
            <div>
                <h1>Iniciar Sesión</h1>
                {information.map((info) => 
                    <LabelInput key={info[0]} id={info[0]} text={info[1]} state={info[2]} setState={info[3]} />
                )}
                <Button label='Iniciar Sesión' />
            </div>
        </div>
    )
}

export default LogIn
