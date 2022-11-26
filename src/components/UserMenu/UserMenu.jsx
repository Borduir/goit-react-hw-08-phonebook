import { useSelector, useDispatch } from 'react-redux';
import defaultAvatar from '../../images/default-avatar.png';
import { logOut } from '../../redux/auth/authOperations';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(state => state.auth.user.name);
  const avatar = defaultAvatar;
  return (
    <div className={css.div}>
      <p className={css.p}>Welcome, {name}</p>
      <img
        className={css.img}
        src={avatar}
        alt={`${name} avatar`}
        width="50px"
      />
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log Out
      </button>
    </div>
  );
}
