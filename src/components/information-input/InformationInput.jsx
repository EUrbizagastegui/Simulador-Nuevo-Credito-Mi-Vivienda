import './InformationInput.css'
import { useState } from 'react';
import { Toolbar } from 'primereact/toolbar';
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

    let information = [
        ['coins', 'Moneda', coins, setCoins],
        ['disbursementDate', 'Fecha de Desembolso del Crédito', disbursementDate, setDisbursementDate],
        ['paymentDay', 'Día de Pago', paymentDay, setPaymentDay],
        ['amount', 'Importe Desembolsado', amount, setAmount],
        ['propertyValue', 'Valor del Inmueble', propertyValue, setPropertyValue],
        ['TEA', 'Tasa Efectiva Anual', TEA, setTEA],
        ['feesPerYear', 'Cuotas al Año', feesPerYear, setFeesPerYear],
        ['gracePeriod', 'Período de Gracia', gracePeriod, setGracePeriod],
        ['paymentPeriod', 'Período de Pago', paymentPeriod, setPaymentPeriod],
        ['totalTerm', 'Plazo Total', totalTerm, setTotalTerm],
        ['desgravamenInsuranceRate', 'Tasa Seguro de Desgravamen', desgravamenInsuranceRate, setDesgravamenInsuranceRate],
        ['propertyInsuranceRate', 'Tasa Seguro del Inmueble', propertyInsuranceRate, setPropertyInsuranceRate],
        ['postage', 'Portes', postage, setPostage]
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
            <div className="information-input-content">
                <h1>Insertar Información</h1>
                {information.map((info) =>
                    <LabelInput key={info[0]} id={info[0]} text={info[1]} state={info[2]} setState={info[3]} />
                )}
            </div>
            <Toolbar className='footer' center='© 2024 Erick Urbizagastegui - Salvador Torres'/>
        </div>
    )
}

export default InformationInput
