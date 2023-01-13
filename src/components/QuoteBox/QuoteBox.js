import './QuoteBox.css';

import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function QuoteBox(props) {

    return (
        <Container id='quote-box' fluid>
            {/* Text */}
            <Row>
                <Col id='text' >
                        <i class="fa-solid fa-quote-left"></i>
                        {/* here the quote text */}
                        <span>If you want to lift yourself up, lift up someone else.</span> 
                </Col>
            </Row>
            {/* Author */}
            <Row>
                <Col>
                    <span>
                        {/* here goes the author */}
                        - Booker T. Washington
                    </span>
                </Col>
            </Row>
            {/* Bottons Row*/}
            <Row>
                <Col>
                {/* NewQuote Botton */}
                    <div className='btn' id='new-quote'>New Quote</div>
                </Col>
            </Row>
        </Container>
    );
}

export default QuoteBox;