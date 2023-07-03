import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { DataContext } from './ContextApi';


const Home = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setData(res.data)
      })
      .catch((err) => console.log(err))
  }, []);

  console.log(data)

  const GlobalState = useContext(DataContext)
  const dispatch = GlobalState.dispatch;
  console.log(GlobalState)
  return (
    <Container>
      <div className='flex'>
        {
          data.map((elem, index) => {
            elem.quantity = 1;
            return (
              <div key={index} className='productitem'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={elem.image} />
                  <Card.Body>
                    <Card.Title className='title'>{elem.title}</Card.Title>
                    <Card.Title>Rs:-{elem.price}</Card.Title>
                  </Card.Body>
                </Card>
                <Button variant="primary" onClick={() => dispatch({ type: "Add", payload: elem })}>Add to Cart</Button>
              </div>
            )
          })
        }
      </div>
    </Container>
  )
}

export default Home