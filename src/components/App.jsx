import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import PrivateRoute from '../redux/auth/PrivateRoute';
import PublicRoute from '../redux/auth/PublicRoute';
import { fetchCurrentUser } from '../redux/auth/authOperations';

const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const RegiserPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const LogInPage = lazy(() => import('../pages/loginPage/loginPage'));

export function App() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <Suspense
      fallback={
        <div>
          <h1>Loading...</h1>
        </div>
      }
    >
      <SharedLayout />
      <Routes>
        <Route
          path="/"
          element={
            token ? (
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            ) : (
              <div>
                <h1>Home Page</h1>
                <h2> Please Login to use App</h2>
              </div>
            )
          }
        />
        <Route
          path="/logIn"
          element={
            <PublicRoute>
              <LogInPage />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegiserPage />
            </PublicRoute>
          }
        />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </Suspense>
  );
}
