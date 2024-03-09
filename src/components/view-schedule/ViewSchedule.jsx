import './ViewSchedule.css'
import { useEffect, useState } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import AppToolbar from '../app-toolbar/AppToolbar';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';

const ViewSchedule = () => {
    const { username } = useParams();
    const [schedule, setSchedule] = useState([]);

    const location = useLocation();
    const data = location.state.data;

    let inicialAmount = Number(data.amount);
    const TNA = ((1 + (Number(data.TEA) / 100)) ** (1 / (12)) - 1) * 12 * 365 / 360
    const i = TNA / 365 * 30
    let monthlyInterest = 0
    const TDA = (Number(data.desgravamenInsuranceRate) / 100) * 12
    const d = TDA / 365 * 30
    let monthlyDesgravamenInsurance = inicialAmount * d
    const TMA = (Number(data.propertyInsuranceRate) / 100) * 12
    const n = TMA / 365 * 30
    const monthlyPropertyInsurance = Number(data.propertyValue) * n
    const portes = Number(data.postage)
    let initialFee = 0
    let fee = 0
    let gPeriod = Number(data.gracePeriod)
    let amortization = 0
    let counter = 1
    let contadorPeriodoGracia = 1
    let totalAmortizacion = 0

    let newArray = [
        {
            n: 0,
            inicialAmount: Number(data.amount),
            amortization: null,
            monthlyInterest: null,
            monthlyDesgravamenInsurance: null,
            monthlyPropertyInsurance: null,
            postage: null,
            fee: null
        }
    ]

    const columns = [
        {field: 'n', header: 'N°'},
        {field: 'inicialAmount', header: 'Saldo Capital'},
        {field: 'amortization', header: 'Amortización'},
        {field: 'monthlyInterest', header: 'Interés'},
        {field: 'monthlyDesgravamenInsurance', header: 'Seg. Desg.'},
        {field: 'monthlyPropertyInsurance', header: 'Seg. Inm.'},
        {field: 'postage', header: 'Portes'},
        {field: 'fee', header: 'Cuota'}
    ];

    const calculateSchedule = () => {
        if ((inicialAmount).toFixed(2) <= 0.00) {
            return
        }
        
        monthlyInterest = inicialAmount * i

        if (gPeriod == 0) {
            if (contadorPeriodoGracia == 1) {
                initialFee = inicialAmount * (i / (1 - (1 + i) ** (-(Number(data.totalTerm) - Number(data.gracePeriod)))))

                fee = initialFee + monthlyDesgravamenInsurance + monthlyPropertyInsurance + portes

                contadorPeriodoGracia++
            }

            amortization = fee - monthlyInterest - monthlyDesgravamenInsurance - monthlyPropertyInsurance - portes
            totalAmortizacion += amortization

            inicialAmount = inicialAmount - amortization

            newArray.push(
                {
                    n: counter,
                    inicialAmount: (inicialAmount).toFixed(2),
                    amortization: (amortization).toFixed(2),
                    monthlyInterest: (monthlyInterest).toFixed(2),
                    monthlyDesgravamenInsurance: (monthlyDesgravamenInsurance).toFixed(2),
                    monthlyPropertyInsurance: (monthlyPropertyInsurance).toFixed(2),
                    postage: (portes).toFixed(2),
                    fee: (fee).toFixed(2)
                }
            );
        } else {
            inicialAmount = inicialAmount + monthlyInterest + monthlyDesgravamenInsurance + monthlyPropertyInsurance + portes

            gPeriod--

            newArray.push(
                {
                    n: counter,
                    inicialAmount: (inicialAmount).toFixed(2),
                    amortization: (0.00).toFixed(2),
                    monthlyInterest: (0.00).toFixed(2),
                    monthlyDesgravamenInsurance: (0.00).toFixed(2),
                    monthlyPropertyInsurance: (0.00).toFixed(2),
                    postage: (0.00).toFixed(2),
                    fee: (0.00).toFixed(2)
                }
            );
        }

        /* // Agregar los números redondeados al newArray
        newArray.push(
            {
                n: counter,
                inicialAmount: (inicialAmount).toFixed(2),
                amortization: (amortization).toFixed(2),
                monthlyInterest: (monthlyInterest).toFixed(2),
                monthlyDesgravamenInsurance: (monthlyDesgravamenInsurance).toFixed(2),
                monthlyPropertyInsurance: (monthlyPropertyInsurance).toFixed(2),
                postage: (portes).toFixed(2),
                fee: (fee).toFixed(2)
            }
        ); */

        setSchedule(newArray)

        counter++

        calculateSchedule()
    }

    useEffect(() => {
        calculateSchedule()
    }, [])

    return (
        <div className='view-schedule'>
            <AppToolbar type={'view-schedule'} title={username} />

            <h1 className='view-schedule-title'>Cronograma Simulado</h1>

            <div className='view-schedule-buttons'>
                <Link to={'/information-input/' + username}>
                    <Button label='Volver a calcular' />
                </Link>
                <Link to={'/home/' + username}>
                    <Button label='Volver a home' />
                </Link>
            </div>

            <DataTable value={schedule} tableStyle={{ minWidth: '50rem' }}>
                {columns.map((col, i) => (
                    <Column key={col.field} field={col.field} header={col.header} />
                ))}
            </DataTable>

            <Toolbar className='footer' center='© 2024 Erick Urbizagastegui - Salvador Torres'/>
        </div>
    )
}

export default ViewSchedule
