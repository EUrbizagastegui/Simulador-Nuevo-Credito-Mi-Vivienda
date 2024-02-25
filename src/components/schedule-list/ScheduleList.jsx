import './ScheduleList.css'
import ScheduleListItem from '../schedule-list-item/ScheduleListItem'
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

const ScheduleList = ({schedules}) => {
    return schedules.lenght > 0 ? (
        /* Mappear schedules para mostrar ScheduleListItems */
        <div className='schedule-list'>
            <ScheduleListItem />
            <Link to='/information-input'>
                <Button className='schedule-list-button' label='Agregar Cronograma' />
            </Link>
        </div>
    ) :  (
        <div className='schedule-list'>
            <h1>No hay cronogramas simulados.</h1>
            <Link to='/information-input'>
                <Button className='schedule-list-button' label='Agregar Cronograma' />
            </Link>
        </div>
    )
}

export default ScheduleList
