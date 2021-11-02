import axios from 'axios';
import {useState} from 'react';

const UpdateForm = props => {
  const {log, setLogs} = props;
  const [newName, setNewName] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newLandmark, setNewLandmark] = useState('');
  const [newImage, setNewImage] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newRating, setNewRating] = useState('');

  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const handleCityChange = event => {
    setNewCity(event.target.value);
  };

  const handleLandmarkChange = event => {
    setNewLandmark(event.target.value);
  };

  const handleImageChange = event => {
    setNewImage(event.target.value);
  };

  const handleDateChange = event => {
    setNewDate(event.target.value);
  };

  const handleRatingChange = event => {
    setNewRating(event.target.value);
  };

  const handleUpdateSubmit = event => {
    event.preventDefault();
    axios.put(`http://localhost:3000/travel-logs/${log._id}`,
      {
        name: newName || log.name,
        city: newCity || log.city,
        landmark: newLandmark || log.landmark,
        image: newImage || log.image,
        date: newDate || log.date,
        rating: newRating || log.rating
      }
    )
    .then(() => {
      axios.get('http://localhost:3000/travel-logs')
      .then(res => {
        setLogs(res.data);
        toggleDisplay(event.target.id);
        for (let i = 0; i < 6; i++) {
          event.target[i].value = '';
        }
      });
    });
  };

  const toggleDisplay = id => {
    const form = document.getElementById(id);
    if (form.style.display === 'none') {
      form.style.display = 'block';
    } else {
      form.style.display = 'none';
    }
  };

  return (
    <div>
      <button onClick={()=>{toggleDisplay(`editForm${log._id}`)}}>Edit</button>
      <form id={`editForm${log._id}`}style={{display: 'none'}} onSubmit={handleUpdateSubmit}>
        Name: <input onChange={handleNameChange} /><br/>
        City: <input onChange={handleCityChange} /><br/>
        Landmark: <input onChange={handleLandmarkChange} /><br/>
        Image: <input onChange={handleImageChange} /><br/>
        Date: <input onChange={handleDateChange} /><br/>
        Rating: <input onChange={handleRatingChange} /><br/>
        <input type="submit" />
      </form>
    </div>
  );
};

export default UpdateForm;
