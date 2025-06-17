import { useContext } from "react";
import { ContactsContext } from "../context/ContactsContext";
import Contact from './Contact';

const ContactList = () => {

    const { contacts } = useContext(ContactsContext);

    return (
        <div className="contact-container">
            {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
            ))}
        </div>
    )

};

export default ContactList;