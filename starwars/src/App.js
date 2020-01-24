import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Card from './Card';

const App = () => {
const [data, setData] = useState([])
useEffect(() => {
  axios.get('https://swapi.co/api/people/')
  .then(response => {
    setData(response.data.results)
    // console.log(response.data.results);
  })
  .catch(error => {
    console.log('Data not returned', error);
  })
}, [])



  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Card data={data}/>
    </div>
  );
}

export default App;
