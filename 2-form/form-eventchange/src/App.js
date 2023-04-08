import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    favCar: '',
  })

  const onFormChange = event => {
    setFormData({...formData, [event.target.name]: event.target.value,})
  }

  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column', marginTop: '2rem'}}>
      <label htmlFor='fName'>
        First Name: <input type='text' id='fName' placeholder='First Name' name='fName' onChange={onFormChange}/>
      </label>
      <label htmlFor='lName'>
        Last Name: <input type='text' id='lName' placeholder='Last Name' name='lName' onChange={onFormChange}/>
      </label>
      <label htmlFor='favCar'>
        Favorite Car: <input type='text' id='favCar' placeholder='Your Car' name='favCar' onChange={onFormChange}/>
      </label>
    </div>
  );
}
export default App;