import './Register.css'
import { useState } from 'react';
import LabelInput from '../label-input/LabelInput';
import { Button } from 'primereact/button';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const information = [
        ['username', 'Nombre de usuario', username, setUsername],
        ['email', 'Correo electrónico', email, setEmail],
        ['password', 'Contraseña', password, setPassword],
        ['repeatPassword', 'Repetir contraseña', repeatPassword, setRepeatPassword]
    ]
    
    return (
        <div className='register'>
            <h1>Registrarse</h1>
            {information.map((info) => 
                <LabelInput key={info[0]} id={info[0]} text={info[1]} state={info[2]} setState={info[3]} />
            )}
            <Button label='Registrarse' />
        </div>
    )
}

export default Register
