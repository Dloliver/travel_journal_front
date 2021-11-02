import {useState} from 'react'

const NewForm = () => {

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
return (
  <section>
  <h2> Add Adventure </h2>
  <form onSubmit = { }>

  </form>
  </section>
)

}

export default NewForm
