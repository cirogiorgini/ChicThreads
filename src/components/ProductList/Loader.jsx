import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spinner animation="border" variant="primary" />
    </div>
  )
}

export default Loader