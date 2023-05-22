import React from 'react';
import "./Footer.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from "../../Assets/image/onlinelogomaker-052223-0614-7674.png"
// import Navbar from 'react-bootstrap/Navbar';
const Footer = () => {
    return (

        <div className='footer'>


            <Row >
                <Col xs={12} md={6} lg={6}><img className='logo' src={logo} width={220} alt="" /></Col>
                <Col className='copyright' xs={12} md={6} lg={6}>© Copright 2023. Devloped & Designed by <a href="https://yousuf-mohamad.netlify.app/" target='_blank' rel="noreferrer">Yousuf Mohammad</a></Col>

            </Row>



        </div >

    );
}

export default Footer;
