import './App.css';

import '../borderers.css';

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import QuoteBox from '../QuoteBox/QuoteBox';


function App() {


  return (
    <Container className='App' fluid style={{height: '100vh'}}>
      <Row className=' justify-content-center align-items-center' style={{height: '100%'}} >
        <Col className='px-0' sm={8} md={7} xl={5}>
          <QuoteBox/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
