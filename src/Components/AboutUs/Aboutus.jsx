import React from 'react';
import "./AboutUs.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import gif from "../../Assets/image/Connected world.gif"

const Aboutus = () => {
    return (
        <div>
            <Container>
                <Row >
                    <Col xs={12} md={6} lg={6}><img src={gif} className='aboutImg' alt="" /></Col>
                    <Col xs={12} md={6} lg={6}>
                        <h1>Welcome to MicroURL <br /> Simplify and Share Your Links!</h1>
                        <hr /><hr />
                        <p className='aboutText'>At MicroUrl, we are dedicated to making long URLs shorter and more manageable. Our web app provides a seamless and efficient solution for shortening your URLs, allowing for easy sharing and improved accessibility. <br /> <br />

                            Our goal is to streamline the process of link sharing by offering a user-friendly interface and a reliable service. Whether you're sharing links on social media, sending them via email, or including them in printed materials, MicroUrl ensures that your links are concise and user-friendly.
                            <br /><br />
                            Whether you're a social media enthusiast, content creator, business professional, or anyone seeking to simplify and optimize their URL sharing experience, MicroUrl is here to assist you.

                            Join thousands of users who have already benefited from our URL shortening service. Start shortening your URLs today and enjoy hassle-free link sharing. <br /><br />

                            If you have any questions, suggestions, or feedback, our friendly support team is ready to assist you.
                        </p>


                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Aboutus;