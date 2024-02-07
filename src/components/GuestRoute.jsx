import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../hooks/use-auth';

export default function GuestRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) return <Navigate to="/" replace={true} /> 


  return children || <Outlet />
}

GuestRoute.propTypes = {
  children: PropTypes.node
}