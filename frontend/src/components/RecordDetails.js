const RecordDetails = ({ record }) => {
  const { title, amount, type, createdAt } = record;
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
    </div>
  );
};

export default RecordDetails;
