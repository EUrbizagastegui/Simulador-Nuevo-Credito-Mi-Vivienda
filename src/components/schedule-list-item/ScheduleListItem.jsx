import './ScheduleListItem.css'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';

const ScheduleListItem = ({schedule}) => {
    const navigate = useNavigate();
    const { username } = useParams();

    const data = {
        "currency": schedule.currency,
        "disbursementDate": schedule.disbursementDate,
        "paymentDay": schedule.paymentDay,
        "amount": Number(schedule.amount),
        "propertyValue": Number(schedule.propertyValue),
        "TEA": Number(schedule.tea),
        "feesPerYear": Number(schedule.feesPerYear),
        "gracePeriod": Number(schedule.gracePeriod),
        "paymentPeriod": Number(schedule.paymentPeriod),
        "totalTerm": Number(schedule.totalTerm),
        "desgravamenInsuranceRate": Number(schedule.desgravamenInsuranceRate),
        "propertyInsuranceRate": Number(schedule.propertyInsuranceRate),
        "postage": Number(schedule.postage),
        "userId": Number(localStorage.getItem('userId'))
    }

    const sendData = () => {
        navigate('/view-schedule/' + username, {state: {data}});
    }

    return (
        <div className='schedule-list-item' onClick={sendData}>
            <h3>Moneda: {schedule.currency}</h3>
            <h3>Fecha: {schedule.disbursementDate}</h3>
            <h3>Importe desembolsado: {schedule.amount}</h3>
            <h3>Periodo de gracia: {schedule.gracePeriod}</h3>
            <h3>Tasa Efectiva Anual: {schedule.tea}%</h3>
            <h3>Plazo Total: {schedule.totalTerm}</h3>
        </div>
    )
}

export default ScheduleListItem
