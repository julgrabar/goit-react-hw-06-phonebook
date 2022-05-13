import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactsItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <span>
        {name}: {number}
      </span>
      <button
        type="button"
        className="delete-btn"
        onClick={() => dispatch(deleteContact(id))}
      >
        <span className="material-icons">delete</span>
      </button>
    </li>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
