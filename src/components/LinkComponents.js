import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link1 from '../assets/img/link/link-1.jpg';
import Link2 from '../assets/img/link/link-2.jpg';
import Link3 from '../assets/img/link/link-3.jpg';
import Link4 from '../assets/img/link/link-4.jpg';
import Link5 from '../assets/img/link/link-5.jpg';
import Link6 from '../assets/img/link/link-6.jpg';

const LinkComponents = () => {
    return <div className="min-vh-100 d-flex align-items-center link" >
        <Container>
            <Row className="mb-5">
                    <Col>
                        <h1 className="text-center fw-bold" data-aos="fade-up">Mitra Kami</h1>
                        <p className="text-center" data-aos="fade-up" data-aos-delay="200">Kami menyediakan layanan-layanan yang berkaitan dengan kebutuhan Anda</p>
                    </Col>
            </Row>
            <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">
                    <Col>
                        <div className="border p-3 text-center mb-4">
                            <img src={Link1} alt="plash" className="w-100" data-aos="fade-up" />
                            <h4 className="mt-3 pb-4">Hotel 1</h4>
                            <Button variant="secondary" className="w-100">
                                <i className="fab fa-telegram fa-lg me-2"></i>
                            </Button>
                        </div>
                    </Col>
                    <Col>
                        <div className="border p-3 text-center mb-4" data-aos="fade-up" data-aos-delay="200">
                            <img src={Link2} alt="plash" className="w-100"/>
                            <h4 className="mt-3 pb-4">Hotel 2</h4>
                            <Button variant="secondary" className="w-100">
                                <i className="fab fa-telegram fa-lg me-2"></i>
                            </Button>
                        </div>
                    </Col>
                    <Col>
                        <div className="border p-3 text-center mb-4" data-aos="fade-up" data-aos-delay="400" >
                            <img src={Link3} alt="plash" className="w-100"/>
                            <h4 className="mt-3 pb-4">Hotel 3</h4>
                            <Button variant="secondary" className="w-100">
                                <i className="fab fa-telegram fa-lg me-2"></i>
                            </Button>
                        </div>
                    </Col>
                    <Col>
                        <div className="border p-3 text-center mb-4" data-aos="fade-up" data-aos-delay="400" >
                            <img src={Link4} alt="plash" className="w-100"/>
                            <h4 className="mt-3 pb-4">Pantai</h4>
                            <Button variant="secondary" className="w-100">
                                <i className="fab fa-telegram fa-lg me-2"></i>
                            </Button>
                        </div>
                    </Col>
                    <Col>
                        <div className="border p-3 text-center mb-4" data-aos="fade-up" data-aos-delay="400" >
                            <img src={Link5} alt="plash" className="w-100"/>
                            <h4 className="mt-3 pb-4">Benteng marlborough</h4>
                            <Button variant="secondary" className="w-100">
                                <i className="fab fa-telegram fa-lg me-2"></i>
                            </Button>
                        </div>
                    </Col>
                    <Col>
                        <div className="border p-3 text-center mb-4" data-aos="fade-up" data-aos-delay="400" >
                            <img src={Link6} alt="plash" className="w-100"/>
                            <h4 className="mt-3 pb-4">Kebun Teh</h4>
                            <Button variant="secondary" className="w-100">
                                <i className="fab fa-telegram fa-lg me-2"></i>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
};

export default LinkComponents;
