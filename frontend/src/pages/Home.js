import { useEffect } from 'react';
import { useRecordsContext } from '../hooks/useRecordsContext';
import { useAuthContext } from '../hooks/useAuthContext';

import axios from 'axios';
// components
import RecordDetails from '../components/RecordDetails';
import RecordForm from '../components/RecordForm';

const Home = () => {
  const { records, dispatch } = useRecordsContext();
  const { user } = useAuthContext();
  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.get(
          'https://mern-expense-tracking-backend.vercel.app/api/records',
          {
            headers: { Authorization: `Bearer ${user.token}` },
          }
        );
        dispatch({ type: 'SET_RECORDS', payload: response.data });
      } catch (error) {
        console.log(error);
      }
    };
    if (user) {
      fetchRecords();
    }
  }, [dispatch, user]);

  return (
    <div className="home">
      <div className="records">
        {records &&
          records?.map(record => {
            return <RecordDetails record={record} key={record._id} />;
          })}
      </div>
      <RecordForm />
    </div>
  );
};

export default Home;
