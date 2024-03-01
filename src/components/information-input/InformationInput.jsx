import './InformationInput.css'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Toolbar } from 'primereact/toolbar';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import LabelInput from '../label-input/LabelInput';

const InformationInput = () => {
    const { username } = useParams();
    const [data, setData] = useState({
        'currency': '',
        'disbursementDate': '',
        'paymentDay': 0,
        'amount': 0,
        'propertyValue': 0,
        'TEA': 0,
        'feesPerYear': 0,
        'gracePeriod': 0,
        'paymentPeriod': 0,
        'totalTerm': 0,
        'desgravamenInsuranceRate': 0,
        'propertyInsuranceRate': 0,
        'postage': 0
    });

    const navigate = useNavigate();

    const updateData = (key, value) => {
        setData(prevDatos => ({
            ...prevDatos,
            [key]: value
        }));
    }

    const coinOptions = [
        ['Soles', 'Dólares'],
        ['soles', 'dollars']
    ]

    let information = [
        ['disbursementDate', 'Fecha de Desembolso del Crédito', data.disbursementDate, updateData, '/^[^<>*!]+$/'],
        ['paymentDay', 'Día de Pago', data.paymentDay, updateData, 'pint'],
        ['amount', 'Importe Desembolsado', data.amount, updateData, 'pnum'],
        ['propertyValue', 'Valor del Inmueble', data.propertyValue, updateData, 'pnum'],
        ['TEA', 'Tasa Efectiva Anual', data.TEA, updateData, 'pnum'],
        ['feesPerYear', 'Cuotas al Año', data.feesPerYear, updateData, 'pint'],
        ['gracePeriod', 'Período de Gracia', data.gracePeriod, updateData, 'pint'],
        ['paymentPeriod', 'Período de Pago', data.paymentPeriod, updateData, 'pint'],
        ['totalTerm', 'Plazo Total', data.totalTerm, updateData, 'pint'],
        ['desgravamenInsuranceRate', 'Tasa Seguro de Desgravamen', data.desgravamenInsuranceRate, updateData, 'pnum'],
        ['propertyInsuranceRate', 'Tasa Seguro del Inmueble', data.propertyInsuranceRate, updateData, 'pnum'],
        ['postage', 'Portes', data.postage, updateData, 'pnum']
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
        // Redirige a la página de cronograma pasando los datos iniciales como estado
        navigate('/view-schedule/' + username, {state: {data}});
    }

    return (
        <div className='information-input'>
            <Toolbar className='toolbar' start={userNameH1} end={userIcon}/>

            <h1>Insertar Información</h1>
            <div className="information-input-content">
                <div className='input-currency'>
                    <label htmlFor="currency">Moneda</label>
                    <Dropdown id="currency" value={data.currency} onChange={(e) => updateData('currency', e.value)} options={coinOptions[0]} placeholder='Selecciona una moneda' />
                </div>
                {information.map((info) =>
                    <LabelInput key={info[0]} id={info[0]} text={info[1]} state={info[2]} setState={info[3]} keyfilter={info[4]} />
                )}
            </div>

            <Button label='Calcular' onClick={toggleSchedule}/>

            <Toolbar className='footer' center='© 2024 Erick Urbizagastegui - Salvador Torres'/>
        </div>
    )
}

export default InformationInput
