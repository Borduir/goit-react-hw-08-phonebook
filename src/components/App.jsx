import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import SharedLayout from './SharedLayout/SharedLayout';
import RegiserPage from '../pages/RegisterPage/RegisterPage';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import LogInPage from '../pages/loginPage/loginPage';

import { fetchCurrentUser } from '../redux/auth/authOperations';

export function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <SharedLayout />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/logIn" element={!isLoggedIn && <LogInPage />} />
        <Route path="/register" element={!isLoggedIn && <RegiserPage />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
      {isLoggedIn && <ContactsPage />}
    </>
  );
}
