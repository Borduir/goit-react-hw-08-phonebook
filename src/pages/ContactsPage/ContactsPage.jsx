import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Form from '../../components/Form/Form';
import Filtre from '../../components/Filtre/Filtre';
import ContactList from '../../components/ContactList/ContactList';
import { fetchContacts } from '../../redux/operations';

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(state => state.contacts.contacts);
  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <Filtre />
      <h2>Contacts</h2>
      {contacts && <ContactList />}
    </div>
  );
}
