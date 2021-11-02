import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {
  const [logs, setLogs] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/travel-logs')
    .then(res => {
      setLogs(res.data);
    });
  }, []);

  return (
    <main>
      <h1>Travel Journal</h1>

    </main>
  );
};


export default App;
