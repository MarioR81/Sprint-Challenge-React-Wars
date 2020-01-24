import React from 'react';
import styled from 'styled-components';


const CardMain = styled.div` 
    width: 12%;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0 1px 6px -2px #000;
    background-color: #c7a78a;
    align-items: center;
    margin: auto;
    margin-bottom: 10px;
`;

const Cards = (data) => {
    // console.log('card', data);
    return (
        <CardMain>
        <div>
          <h1>Character: {data.name}</h1>
          <p>DOB: {data.birth_year}</p>
          <p>Height: {data.height}</p>
          <p>Weight: {data.mass}</p>
      </div>
    </CardMain>
  );
};

export default Cards;