import axios from 'axios';
import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (email, password) => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await axios.post(
        'https://mern-expense-tracking-backend.vercel.app/api/user/signup',
        {
          email,
          password,
        }
      );
      localStorage.setItem('user', JSON.stringify(res.data));
      dispatch({ type: 'LOGIN', payload: res.data });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);

      setError(JSON.parse(error.request.response).error);
    }
  };

  return { signup, isLoading, error };
};
