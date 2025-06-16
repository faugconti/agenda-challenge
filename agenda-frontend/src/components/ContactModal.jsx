import Modal from "./Modal";
import Input from "./Input";
import useInput from "../hooks/useInput";
import { useState, useContext } from "react";
import { ContactsContext } from "../context/ContactsContext";
import { hasMaxLength, hasNoNumbers, hasOnlyNumbers, hasMinLength } from '../util/validations';

const ContactModal = ({ onClose }) => {

    const { currentContact, provinces, createContactHandler, editContactHandler } = useContext(ContactsContext);
    const [provinceId, setProvinceId] = useState(currentContact ? currentContact.provincia.id : 24);

    const {
        value: name,
        setEnteredValue: setName,
        handleInputChange: handleNameChange,
        handleInputBlur: handleNameBlur,
        hasError: nameHasError
    } = useInput(currentContact ? currentContact.nombre : '',
        (val) => hasNoNumbers(val) && hasMinLength(val, 3) && hasMaxLength(val, 20));

    const {
        value: lastName,
        setEnteredValue: setLastName,
        handleInputChange: handleLastNameChange,
        handleInputBlur: handleLastNameBlur,
        hasError: lastNameHasError
    } = useInput(currentContact ? currentContact.apellido : '',
        (val) => hasNoNumbers(val) && hasMinLength(val, 2) && hasMaxLength(val, 25));

    const {
        value: phone,
        setEnteredValue: setPhone,
        handleInputChange: handlePhoneChange,
        handleInputBlur: handlePhoneBlur,
        hasError: phoneHasError
    } = useInput(currentContact ? currentContact.telefono : '',
        (val) => hasOnlyNumbers(val) && hasMinLength(val, 6) && hasMaxLength(val, 25));



    const handleSubmit = (event) => {
        //console.log(provinceId)
        event.preventDefault();
        if (nameHasError || lastNameHasError || phoneHasError) return

        const contact = {
            'nombre': name,
            'apellido': lastName,
            'telefono': phone,
            'provinciaId': provinceId
        }
        //new contact
        if (!currentContact) {
            createContactHandler(contact);
        } else {

            contact['id'] = currentContact.id;
            setName(event.target.name.value);
            setLastName(event.target.lastName.value);
            setPhone(event.target.phone.value);

            editContactHandler(contact);

            //console.log(contact)
        }
        onClose();
    };

    return (
        <Modal onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <div className="control-row">
                    <Input
                        label="Name"
                        id="name"
                        name="name"
                        onBlur={handleNameBlur}
                        onChange={handleNameChange}
                        value={name}
                        required
                        error={nameHasError && 'Enter a valid name'}
                    />
                    <Input
                        label="Last Name"
                        id="lastName"
                        name="lastName"
                        onBlur={handleLastNameBlur}
                        onChange={handleLastNameChange}
                        value={lastName}
                        required
                        error={lastNameHasError && 'Enter a valid Last name'}
                    />
                    <Input
                        label="Phone"
                        id="phone"
                        name="phone"
                        onBlur={handlePhoneBlur}
                        onChange={handlePhoneChange}
                        value={phone}
                        required
                        error={phoneHasError && 'Enter a valid phone number'}
                    />
                    <div className="control">
                        <label>Province</label>
                    <select name="province" value={provinceId} onChange={e => setProvinceId(e.target.value)}>
                        {provinces.map(prov => (
                            <option key={prov.id} value={prov.id}>{prov.nombre}</option>
                        ))}
                    </select>
                    </div>
                </div>
                <div className="buttons">
                    <button type="button" onClick={onClose}>
                        CANCEL
                    </button>
                    <button type="submit">
                        CONFIRM
                    </button>
                </div>
            </form>
        </Modal>
    )
};

export default ContactModal;