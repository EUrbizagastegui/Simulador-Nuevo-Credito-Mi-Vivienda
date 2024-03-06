import './ConfirmAction.css'
import { Button } from 'primereact/button';

const ConfirmAction = ({ show, message, onConfirm, onCancel }) => {
    if (!show) {
        return null;
    }
    
    return (
        <div className="confirm-action">
            <div className='confirm-action-content'>
                <p>{message}</p>
                <div className="confirm-action-buttons">
                    <Button label="Confirmar" severity="success" aria-label="Confirm" onClick={onConfirm} />
                    <Button label="Cancelar" severity="danger" aria-label="Cancel" onClick={onCancel} />
                </div>
            </div>
        </div>
    )
}

export default ConfirmAction
