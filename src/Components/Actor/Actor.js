import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Actor = ({actor,handleAddToMovie}) => {
    const {img,name,budget,genre,movieNumber} = actor;
    return (
        <Col className='text-black'>
        <Card>
          <Card.Img variant="top" src={img} style = {{width:'100%',height: '30vh'}} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <p>Budget: {budget}</p>
              <p>MovieCOunt: {movieNumber}</p>
              <p>Genre: {genre}</p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <button className='btn btn-primary' onClick={ ()=>handleAddToMovie(budget)}>Add to Movie</button>
          </Card.Footer>
        </Card>
      </Col>
    );
};

export default Actor;