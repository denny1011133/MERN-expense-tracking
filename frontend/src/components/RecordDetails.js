import axios from 'axios';
import { useRecordsContext } from '../hooks/useRecordsContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { useAuthContext } from '../hooks/useAuthContext';

const RecordDetails = ({ record }) => {
  const { dispatch } = useRecordsContext();
  const { title, amount, type, createdAt } = record;
  const { user } = useAuthContext();
  const handleClick = async () => {
    try {
      const res = await axios.delete(
        `https://mern-expense-tracking-backend.vercel.app/api/records/${record._id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
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
      <p>
        {formatDistanceToNow(new Date(record.createdAt), { addSuffix: true })}
      </p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default RecordDetails;
