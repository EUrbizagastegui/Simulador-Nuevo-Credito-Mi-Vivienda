import './LabelInput.css'
import { InputText } from 'primereact/inputtext';

const LabelInput = ({ id, text, state, setState, keyfilter}) => {
    return (
        <div className='label-input'>
            <label htmlFor={id}>{text}</label>
            <InputText id={id} placeholder={text} value={state} onChange={(e) => setState(id, e.target.value) } keyfilter={keyfilter}/>
        </div>
    )
}

export default LabelInput
