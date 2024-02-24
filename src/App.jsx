import './App.css'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './components/main-page/MainPage';
import Home from './components/home/Home';
import Register from './components/register/Register';
import LogIn from './components/log-in/LogIn';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/main-page" element={<MainPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/log-in" element={<LogIn />} />

          <Route path="/" element={<Navigate to="/main-page" />} />
          <Route path="*" element={<Navigate to="/main-page" />} />
        </Routes>
      </Router>
  )
}

export default App
