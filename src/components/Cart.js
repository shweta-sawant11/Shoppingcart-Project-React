import React, { useContext, useState } from 'react'
import { DataContext } from './ContextApi'
import { Col, Container, Row } from 'react-bootstrap';

const Cart = () => {

  const GlobalState = useContext(DataContext);
  const state = GlobalState.state
  const dispatch = GlobalState.dispatch


  return (
    <div className='cart'>
      {
        state.map((elem, index) => {
          return (
            <div className='card' key={index}>
              {/* <img src={elem.image} />
              <p>{elem.title}</p>
              <p>{elem.quantity * elem.price}</p>
              <div className='quantity'>
                <button>+</button>
                <p>{elem.quantity}</p>
                <button>-</button>
              </div>
              <h2>x</h2> */}
             {/* <Container> */}
             <Row>
                <Col md={4}>
                  <img src={elem.image}></img>
                </Col>
                <Col md={2}>
                  <h3>{elem.title}</h3>
                </Col>
                <Col md={2}>
                  <h3>Rs:-{elem.quantity * elem.price}</h3>
                </Col>
                <Col md={2}>
                  <button onClick={()=>dispatch({type:"increase",payload:elem})}>+</button>
                  <p>{elem.quantity}</p>
                  <button disabled={elem.quantity === 1} onClick={()=>dispatch({type:"decrease",payload:elem})}>-</button>
                </Col>
                <Col md={2}>
                  <button  onClick={()=>dispatch({type:"remove",payload:elem})}>X</button>
                </Col>
              </Row>
             {/* </Container> */}
            </div>
          )
        })
      }
    </div>
  )
}

export default Cart