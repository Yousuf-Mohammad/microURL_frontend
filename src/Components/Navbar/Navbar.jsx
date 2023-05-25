import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from "../../Assets/image/onlinelogomaker-052223-0614-7674.png"
import "./Navbar.css"



const NaVbar = () => {
    const homeMatch = useMatch('/');
    const statsMatch = useMatch('/stats');
    const aboutMatch = useMatch('/about');

    return (
        <div className="navbarStyle">

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/"><img src={logo} width={220} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="ml-auto">
                            <Nav.Link as={Link} to="/" active={homeMatch}>
                                Home
                            </Nav.Link>

                            <Nav.Link as={Link} to="/stats" active={statsMatch}>
                                Stats
                            </Nav.Link>
                            <Nav.Link as={Link} to="/about" active={aboutMatch}>
                                AboutUs
                            </Nav.Link>
                        </Nav>


                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div >
    );
}

export default NaVbar;
