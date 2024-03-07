import './InformationInput.css'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AppToolbar from '../app-toolbar/AppToolbar';
import { Toolbar } from 'primereact/toolbar';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import LabelInput from '../label-input/LabelInput';
import PaymentScheduleService from '../../shared/services/payment-schedule-service';

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

    const sendData = async (data) => {
        console.log(data);
        const response = await PaymentScheduleService.create(data);
        console.log(response);
    }

    const toggleSchedule = () => {
        // Validación del dropdown
        if (!data.currency) {
            alert('Por favor selecciona una moneda');
            return;
        }

        // Validación del formato de la fecha (xx/xx/xxxx)
        const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
        if (!dateRegex.test(data.disbursementDate)) {
            alert('Por favor ingresa una fecha válida en formato xx/xx/xxxx');
            return;
        }

        // Validación de los demás campos
        if (Number(data.paymentDay) < 1 || Number(data.paymentDay > 31)) {
            alert('El día de pago debe estar entre 1 y 31');
            return;
        }
        if (Number(data.amount) < 1 || Number(data.propertyValue) < 1 || Number(data.feesPerYear) < 1 || Number(data.gracePeriod) < 1 || Number(data.paymentPeriod) < 1 || Number(data.totalTerm) < 1) {
            alert('Los campos de importe desembolsado, valor del inmueble, cuotas al año, período de gracia, período de pago y plazo total deben ser mayores a 0');
            return;
        }
        if (Number(data.gracePeriod) > Number(data.totalTerm)) {
            console.log(data.gracePeriod, data.totalTerm)
            alert('El perido de gracia no puede ser mayor al plazo total');
            return;
        }
        if (Number(data.TEA) <= 0 || Number(data.desgravamenInsuranceRate) <= 0 || Number(data.propertyInsuranceRate) <= 0 || Number(data.postage)<= 0) {
            alert('La tasa efectiva anual, tasas de seguro de desgravamen, seguro del inmueble y portes deben ser mayores a 0');
            return;
        }

        const information = {
            "currency": data.currency,
            "disbursementDate": data.disbursementDate,
            "paymentDay": data.paymentDay,
            "amount": Number(data.amount),
            "propertyValue": Number(data.propertyValue),
            "TEA": Number(data.TEA),
            "feesPerYear": Number(data.feesPerYear),
            "gracePeriod": Number(data.gracePeriod),
            "paymentPeriod": Number(data.paymentPeriod),
            "totalTerm": Number(data.totalTerm),
            "desgravamenInsuranceRate": Number(data.desgravamenInsuranceRate),
            "propertyInsuranceRate": Number(data.propertyInsuranceRate),
            "postage": Number(data.postage),
            "userId": Number(localStorage.getItem('userId'))
        }

        sendData(information);

        // Redirige a la página de cronograma pasando los datos iniciales como estado
        navigate('/view-schedule/' + username, {state: {data}});
    }

    return (
        <div className='information-input'>
            <AppToolbar type={'information-input'} title={username} />

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
