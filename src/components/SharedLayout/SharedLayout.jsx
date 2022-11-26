import css from './SharedLayout.module.css';
import UserMenu from '../UserMenu/UserMenu';
import { NavItem } from './SharedLayout.styled';
import { useSelector } from 'react-redux';

export default function SharedLayout() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <header>
      {!isLoggedIn && (
        <nav className={css.nav}>
          <NavItem to="/logIn">Login</NavItem>
          <NavItem to="/register">Register</NavItem>
        </nav>
      )}
      {isLoggedIn && <UserMenu />}
    </header>
  );
}
