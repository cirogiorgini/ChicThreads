import React from 'react'

const ItemList = (props) => {
    console.log(props)
  return (
    <>
        <div className="d-flex justify-content-center align-items-center ">
            <h2 >{props.saludo}</h2>
        </div>
    </>
    )
}

export default ItemList