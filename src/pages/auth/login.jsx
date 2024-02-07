import { useState } from 'react';
import {
  Box,
  Stack,

  TextField,
  Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useAuth } from '../../hooks/use-auth';
import { useNavigate } from 'react-router-dom';

const Page = () => {
  const auth = useAuth();
  const [isLoading, setIsloading] = useState(false)
  const [error, setError] = useState('')
  const [email, setEmail] = useState('dumy@mail.com')
  const [password, setPassword] = useState('password')
  const navigate = useNavigate()
  async function handleSubmit (e) {
    setIsloading(true)
    e.preventDefault()

    try {
      await auth.signIn(email, password)
      navigate('/')
    } catch (error) {
      console.log('error', error.message)
      setError(error.message)
    }
    setIsloading(false)
  }
  return (
    <>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: '100px',
            width: '100%'
          }}
        >
          <div>
            <Stack
              spacing={1}
              sx={{ mb: 3 }}
            >
              <Typography variant="h4">
                Login
              </Typography>
            </Stack>
              <form
                noValidate
                onSubmit={handleSubmit}
              >
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Stack>
                {error && (
                  <Typography
                    color="error"
                    sx={{ mt: 3 }}
                    variant="body2"
                  >
                    {error}
                  </Typography>
                )}
                  <LoadingButton
                    loading={isLoading}
                    fullWidth
                    size="large"
                    sx={{ mt: 3 }}
                    type="submit"
                    variant="contained"
                  >
                    Continue
                  </LoadingButton>
                {/* <Alert
                  color="primary"
                  severity="info"
                  sx={{ mt: 3 }}
                >
                  <div>
                    You can use <b>demo@devias.io</b> and password <b>Password123!</b>
                  </div>
                </Alert> */}
              </form>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Page;
