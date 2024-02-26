import './Home.css'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Toolbar } from 'primereact/toolbar';
import ScheduleList from '../schedule-list/ScheduleList';

const Home = () => {
    const [schedules, setSchedules] = useState([]);
    const { username } = useParams(); // Extraemos el parámetro de la URL
    
    let userNameH1 = (
        <div>
            <h1>{username}</h1>
        </div>
    )
    const userIcon = (
        <div>
            <i className="pi pi-user" style={{ fontSize: '2.5rem', color: 'white'}}></i>
        </div>
    )
    return (
        <div className='home'>
            <Toolbar className='toolbar' start={userNameH1} end={userIcon}/>
            <ScheduleList schedules={schedules} username={username} />
            <Toolbar className='footer' center='© 2024 Erick Urbizagastegui - Salvador Torres'/>
        </div>
    )
}

export default Home
