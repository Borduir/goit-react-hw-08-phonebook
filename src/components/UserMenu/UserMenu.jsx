import { useSelector, useDispatch } from 'react-redux';
import defaultAvatar from '../../images/default-avatar.png';
import { logOut } from '../../redux/auth/authOperations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(state => state.auth.user.name);
  const avatar = defaultAvatar;
  return (
    <div>
      <img src={avatar} alt={`${name} avatar`} width="50px" />
      <span>Welcome, {name}</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </div>
  );
}
