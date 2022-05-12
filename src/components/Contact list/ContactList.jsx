import PropTypes from 'prop-types';
import { ContactsItem } from 'components/Contact item/ContactsItem';
import { List } from './ContactsList.styled';

export const ContactList = ({ contacts, onDeleteBtn }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteBtn={onDeleteBtn}
        />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  constacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteBtn: PropTypes.func.isRequired,
};
