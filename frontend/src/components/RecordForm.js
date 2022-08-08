import axios from 'axios';
import { useState } from 'react';

const RecordForm = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async e => {
    try {
      e.preventDefault();

      const record = { title, amount, type };

      const response = await axios.post(
        'http://localhost:4000/api/records',
        record
      );

      setTitle('');
      setAmount(0);
      setType('');
    } catch (error) {
      setError(error.message);
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
      />

      <label>Amount:</label>
      <input
        type="number"
        onChange={e => setAmount(e.target.value)}
        value={amount}
      />

      <label>Type:</label>
      <input type="text" onChange={e => setType(e.target.value)} value={type} />

      <button>Add Expense</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default RecordForm;
