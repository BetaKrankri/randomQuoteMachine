import './App.css';

import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import QuoteBox from '../QuoteBox/QuoteBox';

import { QMach } from '../../util/QMach';

function App() {
  const [quote, setQuote] = useState({ author: '', quote: '', category: '' });
  const [color, setColor] = useState([200, 200, 200]);

  useEffect(() => {
    toogleQuote();
    setColor(getRGB());

    return () => { };
  }, []);



  function toogleQuote() {
    setQuote({author:'',quote:'',category:''})
    QMach.getQuoteAuthor().then(quoteFetched => {
      setQuote(quoteFetched);
    })
  }

  function getRGB() {
    let r, g, b;
    do {
      r = Math.floor(Math.random() * 255);
      g = Math.floor(Math.random() * 255);
      b = Math.floor(Math.random() * 255);
    } while (Math.abs(r - g) > 100 || Math.abs(r - b) > 100 || Math.abs(b - g) > 100 || r + g + b > 254 * 2)
    return [r, g, b];
  }

  function rgbStringify(colorArray){
    return 'rgb(' + colorArray[0] + ',' + colorArray[1] + ',' + colorArray[2] + ')';
  }

  return (
    <Container
      className='App'
      fluid
      style={{
        height: '100vh',
        backgroundColor: rgbStringify(color)
      }}
    >
      <Row className='justify-content-center align-items-center' style={{ height: '100%' }} >
        <Col className='px-0' sm={8} md={7} xl={5}>
          <QuoteBox
            quote={quote}
            onNewQuote={() => {toogleQuote(); setColor(getRGB()) }}
            color={rgbStringify(color)}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
