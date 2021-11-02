const Log = props => {
  const {log} = props;

  return (
    <div>
      <h3>{log.name}</h3>
      {log.city && <p>{log.city}</p>}
      {log.landmark && <p>{log.landmark}</p>}
      {log.image && <img style={{width: '50vw'}} src={log.image} alt={log.name}/>}
      {log.date && <p>{log.date}</p>}
      {log.rating && <p>Rating: {log.rating}</p>}
    </div>
  );
};

export default Log;
