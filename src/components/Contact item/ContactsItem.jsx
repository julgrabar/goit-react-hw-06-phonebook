import PropTypes from "prop-types"

export const ContactsItem = ({ id, name, number, onDeleteBtn }) => (
  <li>
    <span>
      {name}: {number}
    </span>
    <button type="button" className="delete-btn" onClick={() => onDeleteBtn(id)}>
      <span className="material-icons">delete</span>
    </button>
  </li>
);

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteBtn: PropTypes.func.isRequired
}