import './LabelInput.css'
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';

const LabelInput = ({ id, text, state, setState, keyfilter, isPassword, onEnter }) => {
    const [icon, setIcon] = useState('pi pi-eye');
    const [type, setType] = useState('password');

    const toggleIcon = () => {
        setType(type => type === 'text' ? 'password' : 'text');
        setIcon(icon => icon === 'pi pi-eye' ? 'pi pi-eye-slash' : 'pi pi-eye');
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && onEnter) {
            onEnter();
        }
    }

    return (
        <div className='label-input'>
            <label htmlFor={id}>{text}</label>

            {isPassword ? (
                    <div className="label-input-icon">
                        <InputText
                            id={id}
                            placeholder={text}
                            value={state}
                            onChange={(e) => setState(id, e.target.value) }
                            keyfilter={keyfilter}
                            type={type}
                            onKeyDown={handleKeyDown}
                        />
                        <i className={icon} onClick={toggleIcon} />
                    </div>
            ) : (
                <InputText
                    id={id}
                    placeholder={text}
                    value={state}
                    onChange={(e) => setState(id, e.target.value) }
                    keyfilter={keyfilter}
                    onKeyDown={handleKeyDown}
                />
            )}
        </div>
    )
}

export default LabelInput
