import {Container} from '@mui/material';
import { Outlet } from 'react-router-dom';

export default function AuthLayout () {

  return (
    <Container>
      <Outlet />
    </Container>
  );
}