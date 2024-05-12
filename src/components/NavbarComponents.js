import React, {useState, useEffect} from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo1 from '../assets/img/brand/travel.png';


const NavbarComponents = () => {

    const [changeColor, setChangeColor] = useState(false);

    const changeBackgroundColor = () => {
        if(window.scrollY > 680) {
            setChangeColor(true);
        } else {
            setChangeColor(false);
        }
    };

    useEffect(() => {
        changeBackgroundColor();

        window.addEventListener('scroll', changeBackgroundColor);
    });

    return (
    <div className="sticky-top">
    <Navbar variant="light" expand="lg" className={changeColor ? "color-active" : ""}>
    <Container id="container">
        <Navbar.Brand href="#home">
            <img
              alt="logo"
              src={logo1}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            <span className="fw-bold fs-5 brand text-black-50">BengkuluTrav</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto text-center">
            
          <Nav.Link href="#home" className="mx-2">Home</Nav.Link>
          <Nav.Link href="#gallery" className="mx-2">Gallery</Nav.Link>
          <Nav.Link href="#services" className="mx-2">Services</Nav.Link>
          <Nav.Link href="#faq" className="mx-2">FaQ</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
  </div>
    );
};

export default NavbarComponents;
