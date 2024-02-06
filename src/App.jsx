import { Route, Routes } from 'react-router-dom';

import AuthLayout from "./layouts/auth/layout";
import Login from './pages/auth/login'
import MainLayout from './layouts/dashboard/layout';
import Home from './pages/home'
import { AuthProvider } from './contexts/auth-context';
import GuardRoute from './components/GuardRoute';
import GuestRoute from './components/GuestRoute';

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          element={
            <GuestRoute>
              <AuthLayout />
            </GuestRoute>
          }
        >
          <Route path="/signin" element={<Login />} />
        </Route>
        <Route
          element={
            <GuardRoute>
              <MainLayout />
            </GuardRoute>
          }
        >
          <Route path='/home' element={<Home />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

