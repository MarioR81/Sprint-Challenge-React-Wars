import React from 'react';
import Card from './Card';
import { Container, Row} from 'reactstrap';

const SWCardGrid = ({data}) => {
    // console.log(data);
    return (
        <Container>
            <Row>
                {data.map((data) => {
                    console.log('map', data);
                    return <Card data={data} />
                })}
            </Row>
        </Container>
    );
};

export default SWCardGrid