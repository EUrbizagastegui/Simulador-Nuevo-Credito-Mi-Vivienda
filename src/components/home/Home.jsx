import './Home.css'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AppToolbar from '../app-toolbar/AppToolbar';
import { Toolbar } from 'primereact/toolbar';
import ScheduleList from '../schedule-list/ScheduleList';
import UserService from '../../shared/services/user-service';

const Home = () => {
    const [schedules, setSchedules] = useState([]);
    const [actionCounter, setActionCounter] = useState(0);

    const { username } = useParams(); // Extraemos el parámetro de la URL
    
    const increaseActionCounter = () => {
        setActionCounter(prev => prev + 1);
    }

    const fetchData = async () => {
        try {
            const psResponse = await UserService.getAllPaymentSchedules(Number(localStorage.getItem('userId')));
            setSchedules(psResponse.data); // MAPEAR TENIENDO EN CUENTA QUE CADA ELEMENTO DEL ARRAY ES UN OBJETO
        } catch (error) {
            alert("An error ocurred when fetching data.", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [actionCounter])

    return (
        <div className='home'>
            <AppToolbar type='home' title={username} />
            <ScheduleList schedules={schedules} username={username} increaseActionCounter={increaseActionCounter} />
            <Toolbar className='footer' center='© 2024 Erick Urbizagastegui - Salvador Torres'/>
        </div>
    )
}

export default Home
