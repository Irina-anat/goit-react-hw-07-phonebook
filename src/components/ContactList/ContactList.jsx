import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import css from './ContactList.module.css';
import { deleteContact } from 'redux/operation';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';


export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  //console.log(contacts)
  const filterContacts = useSelector(selectFilter);
  // console.log(filterContacts);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterContacts.toLowerCase())
  );
  //console.log(visibleContacts)

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
    // console.log(contactId)
    Notify.failure(`Contact successfully deleted.`);
  };

  return (
    <ul>
      {visibleContacts.map(({ id, name, phone }) => (
        <li className={css.contact__list} key={id}>
          <p>{name}</p>
          <p>{phone}</p>
          <button
            value={id}
            onClick={() => handleDeleteContact(id)}
            type="button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
    

