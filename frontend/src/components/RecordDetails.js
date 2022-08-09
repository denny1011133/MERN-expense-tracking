import axios from 'axios';
import { useRecordsContext } from '../hooks/useRecordsContext';

const RecordDetails = ({ record }) => {
  const { dispatch } = useRecordsContext();
  const { title, amount, type, createdAt } = record;

  const handleClick = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:4000/api/records/${record._id}`
      );

      dispatch({ type: 'DELETE__RECORD', payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="record-details">
      <h4>{title}</h4>
      <p>
        <strong>$: </strong>
        {amount}
      </p>
      <p>
        <strong>type: </strong>
        {type}
      </p>
      <p>{createdAt}</p>
      <span onClick={handleClick}>delete</span>
    </div>
  );
};

export default RecordDetails;
