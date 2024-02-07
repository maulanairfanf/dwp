import { Navigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../hooks/use-auth';

export default function GuardRoute({ children }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/signin" replace={true} /> 
}

GuardRoute.propTypes = {
  children: PropTypes.node
}