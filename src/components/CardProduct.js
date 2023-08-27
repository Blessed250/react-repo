import React from 'react'
import { Button, Card } from 'react-bootstrap'

const CardProduct = (props) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary">{props.button}</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default CardProduct
