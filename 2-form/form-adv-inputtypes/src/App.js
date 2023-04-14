import './App.css';
import React, { useState } from 'react';

export default function App() {
  const [formValue, setFormValue] = useState({
    user: '',
    star: '',
    agree: false,
    language: '',
  })
  console.log(formValue);

  const change = e => {
    const {name, value, type, checked} = e.target
    const valueToUse = type === 'checkbox' ? checked : value
    setFormValue({...formValue, [name]: valueToUse}) 
  }

  return (
    <div className="App" >
      <form style={{display: 'flex', flexDirection: 'column', justifyContent:'center', marginTop:'2rem'}}>
        <label> User: 
          <input onChange={change} value={formValue.user} name='user' type='text'/>
        </label>
        <label> Star Trek: 
          <input onChange={change} checked={formValue.star === 'trek'} value='trek' name='star' type='radio'/>
        </label>
        <label> Star Wars: 
          <input onChange={change} checked={formValue.star === 'wars'} value='wars' name='star' type='radio'/>
        </label>        
        <label> Give away your data: 
          <input onChange={change} checked={formValue.agree} name='agree' type='checkbox'/>
        </label>        
        <select onChange={change} value={formValue.language} name='language'>
          <option value={''}>Select Language</option>
          <option value={'1'}>JavaScript</option>
          <option value={'2'}>Python</option>
          <option value={'3'}>Java</option>
        </select>
      </form>
    </div>
  );
}