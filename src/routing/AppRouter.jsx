import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from '../components/main-page/MainPage';
import Home from '../components/home/Home';
import Register from '../components/register/Register';
import LogIn from '../components/log-in/LogIn';
import InformationInput from '../components/information-input/InformationInput';
import ViewSchedule from '../components/view-schedule/ViewSchedule';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/main-page" element={<MainPage />} />
                <Route path="/home/:username" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/log-in" element={<LogIn />} />
                <Route path='/information-input/:username' element={<InformationInput />} />
                <Route path='/view-schedule/:username' element={<ViewSchedule />} />

                <Route path="/" element={<Navigate to="/main-page" />} />
                <Route path="*" element={<Navigate to="/main-page" />} />
            </Routes>
        </Router>
    )
}

export default AppRouter