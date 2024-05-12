import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HeroComponents = () => {
    return (
    <div className="hero min-vh-100 w-100" id="home">
        <Container>
            <Row>
                <Col>
                <h1  className="text-white text-center fs-1 animate__animated animate animate__fadeInUp">Travel to Bengkulu</h1>
                <p  className="text-white-50 text-center text-white animate__animated animate animate__fadeInUp animate__delay-1s">Disini menyediakan macam-macam paket wisata yang berkaitan dengan Bengkulu</p>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export default HeroComponents;