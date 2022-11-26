import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addContact } from '../../redux/operations';
import css from './Form.module.css';

export default function Form() {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const changeName = event => {
    setName(event.currentTarget.value);
  };

  const changeNumber = event => {
    setNumber(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (
      !contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      dispatch(addContact({ name: name, number: number }));
    } else {
      alert(`${name} is already in contacts.`);
    }
  };

  const { form, button, input, label } = css;
  return (
    <form className={form} onSubmit={handleSubmit}>
      <label className={label}>
        {' '}
        Name
        <input
          value={name}
          onChange={changeName}
          className={input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Kanye West"
          required
        />
      </label>
      <label className={label}>
        {' '}
        Number
        <input
          value={number}
          onChange={changeNumber}
          className={input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="+3(012) 345 67 89"
          required
        />
      </label>
      <button className={button} type="submit" onSubmit={handleSubmit}>
        Add contact
      </button>
    </form>
  );
}
