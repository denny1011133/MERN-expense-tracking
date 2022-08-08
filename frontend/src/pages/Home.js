import { useEffect, useState } from 'react';
import axios from 'axios';
// components
import RecordDetails from '../components/RecordDetails';

const Home = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/records');
        setRecords(response.data);
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
    </div>
  );
};

export default Home;
