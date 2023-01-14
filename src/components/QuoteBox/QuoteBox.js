import './QuoteBox.css';

import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

function QuoteBox({ quote, onNewQuote, color }) {

    return (
        <Container id='quote-box'
            fluid className='pt-5 pb-4 px-3 px-sm-4 px-md-5 pb-md-5'>
            {/* Text */}
            <Row className='mb-4'>
                <Col id='text'
                    className='display-6'
                    style={{ color: color }}
                >
                    <i className="fa-solid fa-quote-left me-2"></i>
                    {quote.quote && <span>{quote.quote}</span>}
                    {!quote.quote && renderTextPlaceholder(color)}
                </Col>
            </Row>
            {/* Author */}
            <Row className='mb-4'>
                <Col id='author'
                    className='text-end fs-4'
                    style={{ color: color }}
                >
                    <span>
                        - {quote.author}{!quote.author &&
                            <span className='placeholder col-4'
                                style={{
                                    backgroundColor: color,
                                    transition: 'all 1s ease'
                                }}></span>}
                    </span>
                </Col>
            </Row>
            {/* Bottons Row*/}

            <Row className='my-2 justify-content-end'>
                <Col>
                    <a href='twitter.com/intent/tweet' target='_top' id='tweet-quote'></a>
                </Col>
                <Col xs={10} className={'text-end'}>
                    <Button id='new-quote' className=''
                        onClick={onNewQuote}
                        style={{
                            transition: 'all 1s ease',
                            backgroundColor: color,
                            border: 'none',
                            height: '3rem'
                        }}>New Quote</Button>
                </Col>
            </Row>
        </Container>
    );
}

function renderTextPlaceholder(color) {
    let rdn = () => Math.floor(Math.random() * 5 + 1);



    return (
        <p className='placeholder-glow'>
            <span className={'placeholder mx-1 col-' + rdn()} style={{ backgroundColor: color }}></span>
            <span className={'placeholder mx-1 col-' + rdn()} style={{ backgroundColor: color }}></span>
            <span className={'placeholder mx-1 col-' + rdn()} style={{ backgroundColor: color }}></span>
            <span className={'placeholder mx-1 col-' + rdn()} style={{ backgroundColor: color }}></span>
            <span className={'placeholder mx-1 col-' + rdn()} style={{ backgroundColor: color }}></span>
            <span className={'placeholder mx-1 col-' + rdn()} style={{ backgroundColor: color }}></span>
            <span className={'placeholder mx-1 col-' + rdn()} style={{ backgroundColor: color }}></span>
            <span className={'placeholder mx-1 col-' + rdn()} style={{ backgroundColor: color }}></span>
            <span className={'placeholder mx-1 col-' + rdn()} style={{ backgroundColor: color }}></span>
            <span className={'placeholder mx-1 col-' + rdn()} style={{ backgroundColor: color }}></span>
            <span className={'placeholder mx-1 col-' + rdn()} style={{ backgroundColor: color }}></span>
            <span className={'placeholder mx-1 col-' + rdn()} style={{ backgroundColor: color }}></span>
            <span className={'placeholder mx-1 col-' + rdn()} style={{ backgroundColor: color }}></span>
        </p>
    );
}

export default QuoteBox;