import css from './ContactListItem.module.css';
import { useDispatch } from 'react-redux';

import { deleteContact } from '../../../redux/operations';
const { button, li, p } = css;

export default function ContactListItem(contact) {
  const dispatch = useDispatch();
  const { id, name, number } = contact;
  return (
    <li key={id} className={li}>
      <p className={p}>
        {name} : {number}
      </p>
      <button
        className={button}
        type="button"
        onClick={() => {
          dispatch(deleteContact(contact.id));
        }}
      >
        Delete
      </button>
    </li>
  );
}
