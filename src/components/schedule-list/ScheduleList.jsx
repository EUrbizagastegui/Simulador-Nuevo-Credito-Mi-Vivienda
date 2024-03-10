import './ScheduleList.css'
import { useState, useRef } from 'react';
import ScheduleListItem from '../schedule-list-item/ScheduleListItem'
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { Link } from 'react-router-dom';
import ConfirmAction from '../confirm-action/ConfirmAction';
import PaymentScheduleService from '../../shared/services/payment-schedule-service';

const ScheduleList = ({schedules, username, increaseActionCounter}) => {
    const toast = useRef(null);

    const [showConfirmNotif, setShowConfirmNotif] = useState(false);
    const [scheduleIdToDelete, setScheduleIdToDelete] = useState(0);

    const confirmText = '¿Está seguro de que desea eliminar el cronograma?'

    const openConfirmNotif = (id) => {
        setScheduleIdToDelete(id);
        setShowConfirmNotif(true);
    }

    const closeConfirmNotif = () => {
        setShowConfirmNotif(false);
    }


    const toastSuccess = 'El cronograma ha sido eliminado exitosamente.'
    const toastError = 'Ocurrio un error al eliminar el cronograma.'

    const deleteSchedule = async (id) => {
        try {
            await PaymentScheduleService.delete(id);
            increaseActionCounter();
            setShowConfirmNotif(false);
            toast.current.show({ severity: 'success', summary: 'Eliminación exitosa', detail: toastSuccess });
        } catch (error) {
            toast.current.show({ severity: 'error', summary: 'Error en la eliminación', detail: toastError });
        }
    }

    return schedules.length > 0 ? (
        <div className='schedule-list'>
            <Toast ref={toast} />
            <h1>Cronogramas Simulados</h1>
            {schedules.map((schedule) => {
                return (
                    <div key={schedule.id} className='schedule-list-row'>
                        <ScheduleListItem schedule={schedule}/>
                        <Button icon="pi pi-times" severity="danger" aria-label="Cancel" onClick={() => openConfirmNotif(schedule.id)} />
                    </div>
                )
            })}

            <Link to={`/information-input/${username}`}>
                <Button className='schedule-list-button' label='Agregar Cronograma' />
            </Link>

            <ConfirmAction show={showConfirmNotif} message={confirmText} onConfirm={() => deleteSchedule(scheduleIdToDelete)} onCancel={closeConfirmNotif} />
        </div>
    ) : (
        <div className='schedule-list'>
            <h1>No hay cronogramas simulados.</h1>

            <Link to={`/information-input/${username}`}>
                <Button className='schedule-list-button' label='Agregar Cronograma' />
            </Link>
        </div>
    )
}

export default ScheduleList
