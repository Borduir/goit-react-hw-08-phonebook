import ContactListItem from './ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';

import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.contacts);
  const filtre = useSelector(state => state.filtre);

  const createFilteredList = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(`${filtre.toLowerCase()}`)
    );
  };
  return (
    <ul className={css.list}>
      {createFilteredList().map(contact => {
        return ContactListItem(contact);
      })}
    </ul>
  );
}
