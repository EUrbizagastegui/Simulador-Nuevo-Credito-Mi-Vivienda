import './ScheduleListItem.css'
        

const ScheduleListItem = ({schedule}) => {
    return (
        <div className='schedule-list-item'>
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
