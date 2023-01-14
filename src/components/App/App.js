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

  async function toogleQuote() {
    setQuote({ author: '', quote: '', category: '' })
    let newQuote;
    do {
      newQuote = await QMach.getQuoteAuthor();
    } while (newQuote.quote.length > 200);
    setQuote(newQuote);
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

  function rgbStringify(colorArray) {
    return 'rgb(' + colorArray[0] + ',' + colorArray[1] + ',' + colorArray[2] + ')';
  }

  return (
    <Container
      className='App'
      fluid
      style={{
        height: '100vh',
        backgroundColor: rgbStringify(color),
        transition: 'all 1s ease'
      }}
    >
      <Row className='justify-content-center align-items-center' style={{ height: '100%' }} >
        <Col className='px-0' sm={8} md={7} xl={5}>
          <QuoteBox
            quote={quote}
            onNewQuote={() => { toogleQuote(); setColor(getRGB()) }}
            color={rgbStringify(color)}
          />
          <Row>
            <Col id='myHuella'>
              <p style={{
                  color: 'white',
                }}>by <a
                href='https://github.com/BetaKrankri/randomQuoteMachine'
                target='_blank'
                rel="noreferrer"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}><span>BetaKrankri</span></a></p>
            </Col>
          </Row>
        </Col>
      </Row>

    </Container>

  );
}

export default App;
