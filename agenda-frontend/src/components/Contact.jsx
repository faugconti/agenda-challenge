import { useContext } from "react";
import { ContactsContext } from "../context/ContactsContext";
import '../styles/contact.css';

const Contact = ({ contact }) => {

    const { openDeleteModal, openEditModal } = useContext(ContactsContext);

    return (
        <div className="contact-card">
            <h3>{contact.nombre} {contact.apellido}</h3>
            <p>Phone {contact.telefono}</p>
            <p>Province {contact.provincia.nombre}</p>
            <button onClick={() => openEditModal(contact)}>EDIT</button>
            <button onClick={() => openDeleteModal(contact)}>DELETE</button>
        </div>
    )
}

export default Contact;