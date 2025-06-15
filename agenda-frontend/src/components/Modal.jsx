import { createPortal } from 'react-dom';

const Modal = ({ children, onClose, className }) => {

    const element = (
        <div className='modal-backdrop' onClick={onClose}>
            <div className={`modal-content ${className}`} onClick={e => e.stopPropagation()}>
            {children}
        </div>
        </div >
    );

return createPortal(element, document.getElementById('modal-root'));

};

export default Modal;