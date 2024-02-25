import './InformationInput.css'
import { useState } from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Dropdown } from 'primereact/dropdown';
import LabelInput from '../label-input/LabelInput';

const InformationInput = () => {
    const [username, setUsername] = useState('Erick');
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
            <Toolbar className='footer' center='© 2024 Erick Urbizagastegui - Salvador Torres'/>
        </div>
    )
}

export default InformationInput
