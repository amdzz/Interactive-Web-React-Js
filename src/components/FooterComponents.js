import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo1 from '../assets/img/brand/travel.png';

const FooterComponents =() => {
    return (
        <div className="footer pb-3 pt-4">
            <Container>
                <Row>
                    <Col>
                    <img
                    alt="logo"
                    src={logo1}
                    width="60"
                    height="60"
                    className="d-inline-block align-top"
                    />
                    <span className="fw-bold text-white fs-1">BengkuluTrav</span>
                    </Col>
                    <Col className="text-end">
                        <i class="fa-brands fa-facebook text-white fs-1 mx-lg-3 mx-2"></i>
                        <i class="fa-brands fa-twitter text-white fs-1 mx-lg-3 mx-2"></i>
                        <i class="fa-brands fa-linkedin text-white fs-1 mx-lg-3 mx-2"></i>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="text-center text-white-50">&copy; Copyright by Kelompok 2, All Right Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FooterComponents;