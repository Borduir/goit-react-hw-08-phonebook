import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import css from '../RegisterPage/RegisterAndLogInPage.module.css';

export default function LogInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <h1>Login page</h1>
      <form className={css.form} onSubmit={handleSubmit}>
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
          Log In
        </button>
      </form>
    </div>
  );
}
