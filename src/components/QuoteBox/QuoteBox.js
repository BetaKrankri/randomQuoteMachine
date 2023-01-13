import './QuoteBox.css';

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Button from '../Button/Button';

function QuoteBox(props) {

    return (
        <Container id='quote-box' fluid className='pt-5 pb-4 px-3 px-sm-4 px-md-5 pb-md-5'>
            {/* Text */}
            <Row className='mb-4'>
                <Col id='text' className='display-6'>
                        <i class="fa-solid fa-quote-left me-2"></i>
                        {/* here the quote text */}
                        <span>Aqui debe ir una frase super mamalona de un wey mamon pa reflexionar </span> 
                </Col>
            </Row>
            {/* Author */}
            <Row className='mb-3'>
                <Col id='author' className='text-end fs-5'>
                    <span>
                        {/* here goes the author */}
                        - Supuesto Wey Mamón
                    </span>
                </Col>
            </Row>
            {/* Bottons Row*/}
            <Row className='my-2'>
                <Col>
                {/* NewQuote Botton */}
                <Button />
                </Col>
            </Row>
        </Container>
    );
}

export default QuoteBox;