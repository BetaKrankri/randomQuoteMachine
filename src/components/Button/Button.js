import React from "react";
import { Container, Row, Col } from "reactstrap";

function Button(props) {
    return (
        <Container>
            <Row>
                <Col>
                    <div className='btn' id='new-quote'>New Quote</div>
                </Col>
            </Row>
        </Container>);
}

export default Button;