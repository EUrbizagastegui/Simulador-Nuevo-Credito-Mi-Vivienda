import './LabelInput.css'
import { InputText } from 'primereact/inputtext';

const LabelInput = ({ id, text, state, setState}) => {
    return (
        <div className='label-input'>
            <label htmlFor={id}>{text}</label>
            <InputText id={id} placeholder={text} value={state} onChange={(e) => setState(e.target.value)}/>
        </div>
    )
}

export default LabelInput
