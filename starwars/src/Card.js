import React from 'react';
import { Container, Row} from 'reactstrap';



const Card = (data) => {
    console.log('card', data);
    return (
        <Container>card titile
            <p>Character: {data.name}</p>
            <p>DOB: {data.birth_year} </p>
            <p>Height: {data.height}</p>
            <p>Weight: {data.mass} kg</p>
        </Container>
    )
}

export default Card;
