import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import NewForm from './components/NewForm';
import ShowLogs from './components/ShowLogs';

const App = () => {
  const [logs, setLogs] = useState([])

  useEffect(() => {
    axios
    .get('http://localhost:3000/travel-logs')
    .then((res) => {
      setLogs(res.data);
    });
  }, []);

  return (
    <main>
      <h1>Travel Journal</h1>
      <NewForm setLogs={setLogs}/>
      <ShowLogs logs={logs} setLogs={setLogs} />
    </main>
  );
};


export default App;
