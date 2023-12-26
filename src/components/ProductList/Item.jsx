import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../../main.css"
import { Link } from 'react-router-dom';

const Item = ({producto}) => {
  return (
    <div className='producto'>
        <div>
          <Card style={{ width: '18rem' }}>
              <Card.Img  variant="top" src={producto.image}  />
              <Card.Body>
                  <Card.Title>{producto.title}</Card.Title>
                  <Card.Text>
                      ${producto.price}
                  </Card.Text>
                  <Link to={`/item/${producto.id}`}><Button variant="primary">Ver mas</Button> </Link>
              </Card.Body>
          </Card>
        </div>
    </div>
  )
}

export default Item