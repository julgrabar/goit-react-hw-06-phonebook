import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './Contact form/ContactForm';
import { ContactList } from './Contact list/ContactList';
import { Filter } from './Filter/Filter';
import { Global } from './Global';

const KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const result = localStorage.getItem(KEY);
    if (result !== null) {
      return JSON.parse(result);
    }
    return [];
  });
  const [filter, setFilter] = useState('');
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem(KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = ({ name, number }) => {
    if (
      contacts.map(item => item.name.toLowerCase()).includes(name.toLowerCase())
    ) {
      alert(`${name} is Already in contacts`);
      return;
    }

    const contact = {
      id: nanoid(8),
      name,
      number,
    };

    setContacts(prev => [contact, ...prev]);
  };

  const deleteContact = contactId => {
    setContacts(prev => prev.filter(item => item.id !== contactId));
  };

  const onFilterInput = e => {
    setFilter(e.currentTarget.value);
  };

  const findPhones = () => {
    const normalizedValue = filter.toLowerCase();
    const filteredArray = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedValue)
    );
    return filteredArray;
  };

  return (
    <div>
      <Global />

      <h1>Phonebook</h1>
      <ContactForm onSubmit={addNewContact} />

      <h2>Contacts</h2>
      <Filter onChange={onFilterInput} text={filter} />
      <ContactList contacts={findPhones()} onDeleteBtn={deleteContact} />
    </div>
  );
};
