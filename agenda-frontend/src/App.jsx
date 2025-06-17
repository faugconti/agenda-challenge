import { useContext } from 'react';
import ContactModal from './components/ContactModal';
import ConfirmationModal from './components/ConfirmationModal';
import { ContactsContext } from './context/ContactsContext';
import ContactList from './components/ContactList';
import './styles/app.css';

function App() {

  const {
    isModalOpen,
    isDeleteModalOpen,
    closeModalHandler,
    closeDeleteModalHandler,
    loading,
    openEditModal: openModal
  } = useContext(ContactsContext);

  return (
    <>
      <h1 className='title'>Agenda</h1>
      {isModalOpen && <ContactModal onClose={closeModalHandler} />}
      {isDeleteModalOpen && <ConfirmationModal onClose={closeDeleteModalHandler} />}
      <p>{loading && 'Fetching from server...'}</p>
      <ContactList />
      <button onClick={() => openModal(null)}>CREATE</button>
    </>
  )
}

export default App;