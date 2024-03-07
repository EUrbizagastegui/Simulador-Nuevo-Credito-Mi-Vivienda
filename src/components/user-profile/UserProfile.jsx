import './UserProfile.css'
import { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import AppToolbar from '../app-toolbar/AppToolbar';
import ConfirmAction from '../confirm-action/ConfirmAction';
import LabelInput from '../label-input/LabelInput';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import UserService from '../../shared/services/user-service';

const UserProfile = () => {
    const username = useParams().username
    const toast = useRef(null);

    const [showConfirm, setShowConfirm] = useState(false);
    const [data, setData] = useState({
        'username': '',
        'password': ''
    })

    const confirmText = '¿Está seguro de que ingresó los datos correctos?'

    const updateData = (key, value) => {
        setData(prevDatos => ({
            ...prevDatos,
            [key]: value
        }));
    }

    let information = [
        ['username', 'Nombre de usuario', data.username, updateData, 'alphanum'],
        ['password', 'Contraseña', data.password, updateData, '/[^s]/']
    ]

    const toastSuccess = 'Los datos actualizados se mostrarán una vez vuelva a iniciar sesión.'

    const toastError = 'Ocurrió un error al actualizar los datos.'

    const openConfirmation = () => {
        setShowConfirm(true);
    }

    const closeConfirm = () => {
        setShowConfirm(false);
    }


    const updateProfile = async (id, data) => {
        try {
            await UserService.update(id, data);
            closeConfirm();
            toast.current.show({ severity: 'info', summary: 'Info', detail: toastSuccess });
        } catch (error) {
            toast.current.show({ severity: 'error', summary: 'Info', detail: toastError });
        }
    }

    return (
        <div className="user-profile">
            <AppToolbar type={'user-profile'} title={username} />
            <Toast ref={toast} />
            <div className='user-profile-content'>
                <h1>Actualice sus datos</h1>
                
                {information.map((info) =>
                    <LabelInput key={info[0]} id={info[0]} text={info[1]} state={info[2]} setState={info[3]} keyfilter={info[4]} />
                )}

                <Button label='Actualizar' onClick={openConfirmation}/>
            </div>

            <ConfirmAction show={showConfirm} message={confirmText} onConfirm={() => updateProfile(localStorage.getItem('userId'), data)} onCancel={closeConfirm} />

            <Toolbar className='footer' center='© 2024 Erick Urbizagastegui - Salvador Torres'/>
        </div>
    )
}

export default UserProfile
