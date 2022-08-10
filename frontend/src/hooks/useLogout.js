import { useAuthContext } from './useAuthContext';
import { useRecordsContext } from './useRecordsContext';

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: dispatchRecords } = useRecordsContext();

  const logout = () => {
    localStorage.removeItem('user');

    dispatch({ type: 'LOGOUT' });
    dispatchRecords({ type: 'SET_RECORDS', payload: null });
  };

  return { logout };
};
