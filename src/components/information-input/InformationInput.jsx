import './InformationInput.css'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Toolbar } from 'primereact/toolbar';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import LabelInput from '../label-input/LabelInput';

const InformationInput = () => {
    const [isScheOpen, setIsScheOpen] = useState(false);
    const { username } = useParams();
    const [coins, setCoins] = useState('');
    const [disbursementDate, setDisbursementDate] = useState('');
    const [paymentDay, setPaymentDay] = useState('');
    const [amount, setAmount] = useState(0);
    const [propertyValue, setPropertyValue] = useState(0);
    const [TEA, setTEA] = useState(0);
    const [feesPerYear, setFeesPerYear] = useState(0);
    const [gracePeriod, setGracePeriod] = useState(0);
    const [paymentPeriod, setPaymentPeriod] = useState(0);
    const [totalTerm, setTotalTerm] = useState(0);
    const [desgravamenInsuranceRate, setDesgravamenInsuranceRate] = useState(0);
    const [propertyInsuranceRate, setPropertyInsuranceRate] = useState(0);
    const [postage, setPostage] = useState(0);

    const [schedule, setSchedule] = useState([]);

    const coinOptions = [
        ['Soles', 'Dólares'],
        ['soles', 'dollars']
    ]

    let information = [
        ['disbursementDate', 'Fecha de Desembolso del Crédito', disbursementDate, setDisbursementDate, '/^[^<>*!]+$/'],
        ['paymentDay', 'Día de Pago', paymentDay, setPaymentDay, 'pint'],
        ['amount', 'Importe Desembolsado', amount, setAmount, 'pnum'],
        ['propertyValue', 'Valor del Inmueble', propertyValue, setPropertyValue, 'pnum'],
        ['TEA', 'Tasa Efectiva Anual', TEA, setTEA, 'pnum'],
        ['feesPerYear', 'Cuotas al Año', feesPerYear, setFeesPerYear, 'pint'],
        ['gracePeriod', 'Período de Gracia', gracePeriod, setGracePeriod, 'pint'],
        ['paymentPeriod', 'Período de Pago', paymentPeriod, setPaymentPeriod, 'pint'],
        ['totalTerm', 'Plazo Total', totalTerm, setTotalTerm, 'pint'],
        ['desgravamenInsuranceRate', 'Tasa Seguro de Desgravamen', desgravamenInsuranceRate, setDesgravamenInsuranceRate, 'pnum'],
        ['propertyInsuranceRate', 'Tasa Seguro del Inmueble', propertyInsuranceRate, setPropertyInsuranceRate, 'pnum'],
        ['postage', 'Portes', postage, setPostage, 'pnum']
    ]

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

    const toggleSchedule = () => {
        setIsScheOpen(true)
        calculateSchedule()
    }

    let inicialAmount = Number(amount);
    const TNA = ((1 + (TEA / 100)) ** (1 / 12) - 1) * 12 * 365 / 360 /* POSIBLEMENTE DEBA SER LET */
    const i = TNA / 365 * 30
    let monthlyInterest = 0
    const TDA = (desgravamenInsuranceRate / 100) * 12
    const d = TDA / 365 * 30
    const monthlyDesgravamenInsurance = amount * d
    const TMA = (propertyInsuranceRate / 100) * 12
    const n = TMA / 365 * 30
    const monthlyPropertyInsurance = propertyValue * n
    const portes = Number(postage)
    const initialFee = amount * (i / (1 - (1 + i) ** (-totalTerm)))
    const fee = initialFee + monthlyDesgravamenInsurance + monthlyPropertyInsurance + portes
    let amortization = 0
    let counter = 1
    let newArray = [
        {
            n: null,
            inicialAmount: 50000.00,
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

        // Antes de agregar los números al newArray, redondearlos a dos decimales
        monthlyInterest = inicialAmount * i

        amortization = fee - monthlyInterest - monthlyDesgravamenInsurance - monthlyPropertyInsurance - portes

        inicialAmount = inicialAmount - amortization

        // Agregar los números redondeados al newArray
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

        setSchedule(newArray)

        counter++

        calculateSchedule()
    }

    return (
        <div className='information-input'>
            <Toolbar className='toolbar' start={userNameH1} end={userIcon}/>

            <h1>Insertar Información</h1>
            <div className="information-input-content">
                <div className='input-currency'>
                    <label htmlFor="currency">Moneda</label>
                    <Dropdown id="currency" value={coins} onChange={(e) => setCoins(e.value)} options={coinOptions[0]} placeholder='Selecciona una moneda' />
                </div>
                {information.map((info) =>
                    <LabelInput key={info[0]} id={info[0]} text={info[1]} state={info[2]} setState={info[3]} keyfilter={info[4]} />
                )}
            </div>

            <Button label='Calcular' onClick={toggleSchedule}/>

            {
                isScheOpen && 
                    <DataTable value={schedule} tableStyle={{ minWidth: '50rem' }}>
                        {columns.map((col, i) => (
                            <Column key={col.field} field={col.field} header={col.header} />
                        ))}
                    </DataTable>
            }

            <Toolbar className='footer' center='© 2024 Erick Urbizagastegui - Salvador Torres'/>
        </div>
    )
}

export default InformationInput
