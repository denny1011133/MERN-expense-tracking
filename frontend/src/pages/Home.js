import { useEffect } from 'react';
import { useRecordsContext } from '../hooks/useRecordsContext';

import axios from 'axios';
// components
import RecordDetails from '../components/RecordDetails';
import RecordForm from '../components/RecordForm';

const Home = () => {
  const { records, dispatch } = useRecordsContext();

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/records');
        dispatch({ type: 'SET_RECORDS', payload: response.data });
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecords();
  }, []);

  return (
    <div className="home">
      <div className="records">
        {records &&
          records?.map(record => (
            <RecordDetails record={record} key={record._id} />
          ))}
      </div>
      <RecordForm />
    </div>
  );
};

export default Home;
