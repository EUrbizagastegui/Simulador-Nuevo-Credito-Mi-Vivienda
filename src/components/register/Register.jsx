import './Register.css'
import { useState } from 'react';
import LabelInput from '../label-input/LabelInput';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import UserService from '../../shared/services/user-service';

const Register = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    
    const updateData = (key, value) => {
        if (key === 'username') {
            setUsername(value);
        }
        else if (key === 'email') {
            setEmail(value);
        }
        else if (key === 'password') {
            setPassword(value);
        }
        else {
            setRepeatPassword(value);
        }
    }

    const information = [
        ['username', 'Nombre de usuario', username, updateData],
        ['email', 'Correo electrónico', email, updateData],
        ['password', 'Contraseña', password, updateData],
        ['repeatPassword', 'Repetir contraseña', repeatPassword, updateData]
    ]

    const sendData = async () => {
        if (username === '' || email === '' || password === '' || repeatPassword === '') {
            alert('Por favor, complete todos los campos.');
            return;
        } else if (password !== repeatPassword) {
            alert('Las contraseñas no coinciden.');
            return;
        }

        const data = {
            "username": username,
            "email": email,
            "password": password
        }

        try {
            await UserService.create(data);
            navigate('/log-in');
        } catch (error) {
            console.error("An error ocurred when sending data.", error);
        }
    }

    return (
        <div className='register'>
            <h1>Registrarse</h1>

            {information.map((info) => 
                <LabelInput key={info[0]} id={info[0]} text={info[1]} state={info[2]} setState={info[3]} />
            )}
            
            <Button label='Registrarse' onClick={sendData}/>
        </div>
    )
}

export default Register
