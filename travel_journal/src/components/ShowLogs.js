import Log from './Log';

const ShowLogs = props => {
  const {logs, setLogs} = props;

  return (
    <section>
    <h2>Places I've been</h2>
    {logs.map(log => {
      return(
        <Log key={log._id} log={log} setLogs={setLogs} />
      );
    })}
    </section>
  );
};

export default ShowLogs;
