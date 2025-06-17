import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ContactsProvider from './context/ContactsContext.jsx'

createRoot(document.getElementById('root')).render(
  <ContactsProvider>
    <App />
  </ContactsProvider>
)