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
     {data.map((data) => {
                    // console.log('map', data);
                    return <Card data={data}
                    name={data.name}
                    birth_year={data.birth_year}                  
                    height={data.height}
                    mass={data.mass}
                    />
                })}
    </div>
  );
}

export default App;
