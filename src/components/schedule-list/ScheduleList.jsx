import './ScheduleList.css'
import { useState } from 'react';
import ScheduleListItem from '../schedule-list-item/ScheduleListItem'
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import ConfirmAction from '../confirm-action/ConfirmAction';
import PaymentScheduleService from '../../shared/services/payment-schedule-service';

const ScheduleList = ({schedules, username, increaseActionCounter}) => {
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

    const deleteSchedule = async (id) => {
        try {
            await PaymentScheduleService.delete(id);
            increaseActionCounter();
            setShowConfirmNotif(false);
        } catch (error) {
            alert("Ocurrió un error al eliminar el cronograma.", error);
        }
    }

    return schedules.length > 0 ? (
        <div className='schedule-list'>
            {schedules.map((schedule) => {
                return (
                    <div key={schedule.id} className='schedule-list-row'>
                        <ScheduleListItem schedule={schedule} />
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
