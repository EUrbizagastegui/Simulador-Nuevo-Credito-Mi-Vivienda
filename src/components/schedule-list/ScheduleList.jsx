import './ScheduleList.css'
import ScheduleListItem from '../schedule-list-item/ScheduleListItem'
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import UserService from '../../shared/services/user-service';

const ScheduleList = ({schedules, username}) => {
    const [data, setData] = useState({});

    const fetchData = async () => {
        try {
            const psResponse = await UserService.getAllPaymentSchedules(Number(localStorage.getItem('userId')));
            setData(psResponse.data); // MAPEAR TENIENDO EN CUENTA QUE CADA ELEMENTO DEL ARRAY ES UN OBJETO
        } catch (error) {
            alert("An error ocurred when fetching data.", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        console.log(data);
    }, [data])

    return schedules.lenght > 0 ? (
        /* Mappear schedules para mostrar ScheduleListItems */
        <div className='schedule-list'>
            <ScheduleListItem />
            <Link to={`/information-input/${username}`}>
                <Button className='schedule-list-button' label='Agregar Cronograma' />
            </Link>
        </div>
    ) :  (
        <div className='schedule-list'>
            <h1>No hay cronogramas simulados.</h1>
            <Link to={`/information-input/${username}`}>
                <Button className='schedule-list-button' label='Agregar Cronograma' />
            </Link>
        </div>
    )
}

export default ScheduleList
