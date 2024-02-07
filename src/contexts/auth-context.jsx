import { createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'universal-cookie';
import fetch from '../hooks/use-fetch';
import { TOKEN } from '../constant/auth';
import { useNavigate } from 'react-router-dom';

const HANDLERS = {
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT'
};

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  token: null,
};

const handlers = {
  [HANDLERS.SIGN_IN]: (state, action) => {
    const token = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      token: token,
      isLoading: false
    };
  },
  [HANDLERS.SIGN_OUT]: (state) => {
    return {
      ...state,
      isAuthenticated: false,
      token: null,
      isLoading: false
    };
  }
};

const reducer = (state, action) => (
  handlers[action.type] ? handlers[action.type](state, action) : state
);


export const AuthContext = createContext();


export const AuthProvider = (props) => {
  const cookie = new Cookies();
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate()

  const initialize = async () => {
    let isAuthenticated = false;
    const token = cookie.get(TOKEN, {path: '/'})
    if (token) {
      isAuthenticated = true
    } 

    if (isAuthenticated) {
      dispatch({
        type: HANDLERS.SIGN_IN,
        token
      });
    } else {
      dispatch({
        type: HANDLERS.SIGN_OUT
      });
    }
  };

  useEffect(
    () => {
      initialize();
    },
    []
  );

  const signIn = async (email, password) => {
    const token = "abcd"
    try {
      const response = await fetch.get("/login")
      if (response) {
        if (response.data.email === email && response.data.password === password){
          dispatch({
            type: HANDLERS.SIGN_IN,
            token: token
          });
          cookie.set(TOKEN, token, { path: '/' });
          return navigate('/')
        } else {
          throw new Error('Please check your email and password');
        }
      }
    } catch (err) {
      throw new Error('Please check your email and password');
    }
  };

  const signOut = () => {
    cookie.remove(TOKEN, { path: '/' });
    dispatch({
      type: HANDLERS.SIGN_OUT
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node
};

export const AuthConsumer = AuthContext.Consumer;