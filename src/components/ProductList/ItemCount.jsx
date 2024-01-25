import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

const ItemCount = () => {
    const [Count, setCount] = useState(1)

    const restar = () => {
        Count > 1  && setCount(Count - 1)
    }
  return (
    <div className='item-count'>
         <Button variant="primary" onClick={restar}> - </Button>
        <p>{Count}</p>
        <Button variant="primary" onClick={ () => {setCount(Count + 1)}}> + </Button>
    </div>
  )
}

export default ItemCount