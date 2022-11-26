import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import css from './RegisterAndLogInPage.module.css';

export default function RegiserPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <h1>Regisration page</h1>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          <p>Name</p>
          <input
            className={css.input}
            type="name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className={css.label}>
          <p>Email</p>
          <input
            className={css.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label className={css.label}>
          <p>Password</p>
          <input
            className={css.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button className={css.button} type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
}
