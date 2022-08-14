import axios from 'axios';
import { useState } from 'react';
import { useRecordsContext } from '../hooks/useRecordsContext';
import { useAuthContext } from '../hooks/useAuthContext';

const RecordForm = () => {
  const { dispatch } = useRecordsContext();
  const { user } = useAuthContext();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('');
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async e => {
    try {
      e.preventDefault();

      const record = { title, amount, type };

      const res = await axios.post(
        'https://expensetrackerde.herokuapp.com/api/records',
        record,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      setTitle('');
      setAmount(0);
      setType('');
      setEmptyFields([]);
      setError(null);
      dispatch({ type: 'CREATE_RECORD', payload: res.data });
    } catch (error) {
      setError(error.message);
      setEmptyFields(JSON.parse(error.request.response).emptyFields);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Expense</h3>

      <label>Expense Title:</label>
      <input
        type="text"
        onChange={e => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes('title') ? 'error' : ''}
      />

      <label>Amount:</label>
      <input
        type="number"
        onChange={e => setAmount(e.target.value)}
        value={amount}
        className={emptyFields.includes('amount') ? 'error' : ''}
      />

      <label>Type:</label>
      <input
        type="text"
        onChange={e => setType(e.target.value)}
        value={type}
        className={emptyFields.includes('type') ? 'error' : ''}
      />

      <button>Add Expense</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default RecordForm;
