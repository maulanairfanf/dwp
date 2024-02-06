import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../hooks/use-auth';

export default function GuardRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/signin" replace={true} /> 


  return children || <Outlet />
}

GuardRoute.propTypes = {
  children: PropTypes.node
}