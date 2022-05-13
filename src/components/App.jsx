import { nanoid } from 'nanoid';
import { ContactForm } from './Contact form/ContactForm';
import { ContactList } from './Contact list/ContactList';
import { Filter } from './Filter/Filter';
import { Global } from './Global';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { filterContacts } from 'redux/contactsSlice';

export const App = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filterValue = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

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

    dispatch(addContact(contact));
  };

  const onFilterInput = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  const findPhones = () => {
    const normalizedValue = filterValue.toLowerCase();
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
      <Filter onChange={onFilterInput} text={filterValue} />
      <ContactList contacts={findPhones()} />
    </div>
  );
};
