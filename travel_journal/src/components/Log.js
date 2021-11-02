import UpdateForm from './UpdateForm';
import axios from 'axios';

const Log = props => {
  const {log, setLogs} = props;

  const handleDelete = () => {
    axios.delete(`http://localhost:3000/travel-logs/${log._id}`)
    .then(res => {
      axios.get('http://localhost:3000/travel-logs')
      .then(res => {
        setLogs(res.data);
      });
    });
  };

  return (
    <div>
      <h3>{log.name}</h3>
      {log.city && <p>{log.city}</p>}
      {log.landmark && <p>{log.landmark}</p>}
      {log.image && <img style={{width: '50vw'}} src={log.image} alt={log.name}/>}
      {log.date && <p>{log.date}</p>}
      {log.rating && <p>Rating: {log.rating}</p>}
      <button onClick={handleDelete}>Delete</button>
      <UpdateForm log={log} setLogs={setLogs} />
    </div>
  );
};

export default Log;
