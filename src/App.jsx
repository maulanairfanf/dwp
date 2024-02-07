import { Route, Routes } from 'react-router-dom';

import AuthLayout from "./layouts/auth/layout";
import Login from './pages/auth/login'
import MainLayout from './layouts/dashboard/layout';
import Home from './pages/home'
import Profile from './pages/profile'
import { AuthProvider } from './contexts/auth-context';
import GuardRoute from './components/GuardRoute';
import GuestRoute from './components/GuestRoute';
import { useAuth } from './hooks/use-auth';


export default function App() {

  return (
    <AuthProvider>
      <Router/>
    </AuthProvider>
  );
}

function Router () {
  const { isLoading } = useAuth();

  return (
    <>
      {
        isLoading ? <></> : (
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
            <Route path='/' element={<Home/>} />
            <Route path='/profile' element={<Profile />} />
          </Route>
        </Routes>
        )
      }
    </>
  )

}
