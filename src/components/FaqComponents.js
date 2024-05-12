import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const FaqComponents = () => {
    return (
    <div className="faq" id="faq">
        <Container>
            <Row className="mb-5">
                <Col>
                <h2 className="text-center fw-bold">Yang Biasa ditanyakan</h2>
                <p className="text-center" data-aos="fade-up" data-aos-delay="200">Berikut adalah beberapa pertanyaan yang sering dihadapi oleh pelanggan kami.</p>
                </Col>
            </Row>
            <Row className="row-cols-lg-2 row-cols-md-2 row-cols-1 g-4">
                <Col data-aos="fade-up" data-aos-delay="400">
                    <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Apakah Tempatnya Nyaman?</Accordion.Header>
                        <Accordion.Body>
                        Ya, kami menyediakan tempat yang nyaman, aman, dan berkaitan dengan kebutuhan Anda.
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                </Col>
                <Col data-aos="fade-up" data-aos-delay="500">
                    <Accordion>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Bagaimana Cara Ordernya?</Accordion.Header>
                        <Accordion.Body>
                        Anda dapat melakukan pemesanan melalui WhatsApp, kami akan segera membuatkan reservasi Anda.
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                </Col>
                <Col data-aos="fade-up" data-aos-delay="600">
                    <Accordion>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Bagaimana Lingkungan di Sekitar?</Accordion.Header>
                        <Accordion.Body>
                        Lingkungan di sekitar kami sangat baik, kami menyediakan tempat-tempat yang nyaman dan berkaitan dengan kebutuhan Anda.
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                </Col>
                <Col data-aos="fade-up" data-aos-delay="700">
                    <Accordion>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Berapa Rentang Harga Yang Tersedia?</Accordion.Header>
                        <Accordion.Body>
                        Kami menyediakan harga yang terjangkau dan berkualitas tinggi, dengan kualitas yang terbaik dan harga yang berkaitan dengan kebutuhan Anda.
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                </Col>
                <Col data-aos="fade-up" data-aos-delay="800">
                    <Accordion>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Apa Saja Fasilitas Yang Disediakan?</Accordion.Header>
                        <Accordion.Body>
                        Kami menyediakan fasilitas-fasilitas yang terbaik dan berkaitan dengan kebutuhan Anda.
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                </Col>
                <Col data-aos="fade-up" data-aos-delay="900">
                    <Accordion>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>Berapa Saja Kapasitas Kamar Yang Disediakan?</Accordion.Header>
                        <Accordion.Body>
                        Kami menyediakan kapasitas kamar yang berkaitan dengan kebutuhan Anda.
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                </Col>
                <Col data-aos="fade-up" data-aos-delay="1000">
                    <Accordion>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>Apa Saja Macamnya?</Accordion.Header>
                        <Accordion.Body>
                        Kami menyediakan macam-macam paket wisata yang berkaitan dengan kebutuhan Anda.
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                </Col>
                <Col data-aos="fade-up" data-aos-delay="1100">
                    <Accordion>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header>Apakah Aman Untuk Anak?</Accordion.Header>
                        <Accordion.Body>
                        Ya, kami menyediakan tempat yang nyaman dan aman untuk anak-anak.
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export default FaqComponents;