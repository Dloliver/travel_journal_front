import {useState} from 'react'
import axios from 'axios';

const NewForm = (props) => {
const {setLogs} = props

  const  [newName, setName] = useState('')
  const  [newCity, setCity] = useState('')
  const  [newLandmark, setLandmark ] = useState('')
  const  [newImage, setImage] = useState('')
  const  [newDate, setDate] = useState('')
  const  [newRating, setRating] = useState('')


  const handleNewNameChange = (event) => {
    setName(event.target.value);
  }

  const handleNewCityChange = (event) => {
    setCity(event.target.value);
  }

  const handleNewLandmarkChange = (event) => {
    setLandmark(event.target.value);
  }

  const handleNewImageChange = (event) => {
    setImage(event.target.value);
  }

  const handleNewDateChange = (event) => {
    setDate(event.target.value);
  }

  const handleNewRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  }


  const handleNewTravelFormSubmit = (event) => {
    event.preventDefault();

    axios.post(
      'http://localhost:3000/travel-logs',
      {
        name: newName,
        city: newCity,
        landmark: newLandmark,
        image: newImage,
        date: newDate,
        rating: newRating
      }).then(()=> {
        axios
          .get('http://localhost:3000/travel-logs')
          .then((response)=> {
            setLogs(response.data);
          })
      })
  }





return (
  <section>
  <h2> Add Adventure </h2>
  <form onSubmit={handleNewTravelFormSubmit}>
  name: <input type="text" onChange={handleNewNameChange}/>
  <br/>
  city: <input type="text" onChange={handleNewCityChange}/>
  <br/>
  landmark: <input type="text" onChange={handleNewLandmarkChange}/>
  <br/>
  image: <input type="text" onChange={handleNewImageChange}/>
  <br/>
  date: <input type="text" onChange={handleNewDateChange}/>
  <br/>
  rating: <input type="text" onChange={handleNewRatingChange}/>
  <br/>
  <input type="submit" value="Log New Trip"/>
  </form>
  </section>
)

}

export default NewForm
