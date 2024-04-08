import {useEffect, useState} from 'react'
import ContactList from "./components/ContactList/ContactList.jsx";
import "reset-css/reset.css";
import './App.css'
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import { nanoid } from 'nanoid';

function App() {
    const initialState = [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];

    const [contacts, setContacts] = useState(() => {
        return localStorage.getItem('contacts') ? JSON.parse(localStorage.getItem('contacts')) : initialState;
    });

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const [arrayFiltered, setArrayFiltered] = useState('');

    const handleSearch = (contact) => {
        setArrayFiltered(contact);
    };

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(arrayFiltered.toLowerCase())
    );

    const addContact = (values) => {
        const newContact = {
            id: nanoid(),
            ...values
        };
        setContacts(prevState => [...prevState, newContact]);
    };

    const removeContact = (id) => {
        setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
    }


    return (
      <div className="app">
          <h1>Phonebook</h1>
          <ContactForm
              addContact={addContact}
          />
          <SearchBox
              handleSearch={handleSearch}
          />
          <ContactList
              contacts={filteredContacts}
              removeContact={removeContact}
          />
      </div>
  )
}

export default App
