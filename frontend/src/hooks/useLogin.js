import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import axios from 'axios';
export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await axios.post('http://localhost:4000/api/user/login', {
        email,
        password,
      });
      localStorage.setItem('user', JSON.stringify(res.data));
      dispatch({ type: 'LOGIN', payload: res.data });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);

      setError(JSON.parse(error.request.response).error);
    }
  };

  return { login, isLoading, error };
};
