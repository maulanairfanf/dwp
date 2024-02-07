import { Navigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../hooks/use-auth';

export default function GuestRoute({ children }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Navigate to="/" replace={true} /> : children
}

GuestRoute.propTypes = {
  children: PropTypes.node
}