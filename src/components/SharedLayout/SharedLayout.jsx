import css from './SharedLayout.module.css';
import UserMenu from '../UserMenu/UserMenu';
import { NavItem } from './SharedLayout.styled';
import { useSelector } from 'react-redux';

export default function SharedLayout() {
  const token = useSelector(state => state.auth.token);
  return (
    <header className={css.header}>
      {!token && (
        <nav className={css.nav}>
          <NavItem to="/logIn">Login</NavItem>
          <NavItem to="/register">Register</NavItem>
        </nav>
      )}
      {token && <UserMenu />}
    </header>
  );
}
