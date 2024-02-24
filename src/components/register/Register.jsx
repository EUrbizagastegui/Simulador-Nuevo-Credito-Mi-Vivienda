import './Register.css'
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    return (
        <div>
            <h1>Registrarse</h1>
            <span className='p-float-label'>
                <InputText id='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                <label htmlFor="username">Usuario</label>
            </span>
            <span className='p-float-label'>
                <InputText id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <label htmlFor="password">Contraseña</label>
            </span>
            <span className='p-float-label'>
                <InputText id='username' value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)}/>
                <label htmlFor="repeatPassword">Repetir Contraseña</label>
            </span>
            <Button label='Registrarse' />
        </div>
    )
}

export default Register
