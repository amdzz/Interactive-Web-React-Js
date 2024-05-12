import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ServicesComponents = () => {
    return (
        <div id="services" className="services min-vh-100 d-flex align-items-center">
            <Container>
                <Row className="mb-5">
                    <Col>
                        <h1 className="text-center fw-bold" data-aos="fade-up">Services</h1>
                        <p className="text-center" data-aos="fade-up" data-aos-delay="200">Temukan berbagai layanan kami yang dirancang untuk memenuhi kebutuhan Anda dengan profesionalisme dan dedikasi tinggi.</p>
                    </Col>
                </Row>
                <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center">
                    <Col className="text-center py-5 px-3" data-aos="fade-up">
                       <i className="fa-solid fa-coins fs-2 mb-4"></i>
                       <h5 className="fw-bold">Harga terjangkau</h5>
                       <p>Kami menawarkan harga yang terjangkau dan berkualitas tinggi, dengan kualitas yang terbaik dan harga yang berkaitan dengan kebutuhan Anda</p>
                    </Col>
                    <Col className="text-center py-5 px-3" data-aos="fade-up" data-aos-delay="400">
                       <i className="fa-solid fa-thumbs-up fs-2 mb-4"></i>
                       <h5 className="fw-bold">Fasilitas Terbaik</h5>
                       <p>Kami menyediakan fasilitas-fasilitas yang terbaik dan berkaitan dengan kebutuhan Anda</p>
                    </Col>
                    <Col className="text-center py-5 px-3" data-aos="fade-up" data-aos-delay="600">
                       <i className="fa-solid fa-shield-halved fs-2 mb-4"></i>
                       <h5 className="fw-bold">Tersertifikasi</h5>
                       <p>Kami menyediakan Layanan yang bersertifikasi dan berkaitan dengan kebutuhan Anda</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServicesComponents;