
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React from "react";
import logo from '../../../logo.svg';
import { useRef } from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
  } from 'mdb-react-ui-kit';

import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css";

let Home = (props) => {
    const ref = useRef(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>

        <div>
            
        <Navbar collapseOnSelect
                expand="lg"
                className="bg-body-tertiary fixed-navbar">
      <Container>
        <Navbar.Brand href="#home">
        <img src="https://www.amartek.id/i/logo/weblogo-amartek.png" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='justify-content-end' style={{ width: "100%" }}>
            <Nav.Link href="https://www.amartek.id/">
                <button type="button" class="btn btn-outline-primary">About Us</button>
            </Nav.Link>
            <Nav.Link href="login">
                <button type="button" class="btn btn-outline-success">Login</button>
            </Nav.Link>
            <Nav.Link href="home">
                <img src="https://cdn-icons-png.flaticon.com/512/74/74807.png" width="30" height="30" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

      <div name="mainpage" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1tZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80")', backgroundSize: "contain", backgroundSize: "100%", backgroundPositionY: "50%", textAlign: "center", color: "white", width: "100%", height: "50vh"}}>
        <div style={{paddingTop: "160px"}}>
        <h1 style={{textShadow: "0px 0px 30px white"}}>AMARTEK CODE TEST</h1>
        <p>A preliminary test for IT Graduate Development Program</p>
        <Button variant="primary" className="mr-3" style={{marginRight: "0.25%"}}>Take an exam</Button>
        <Button onClick={handleClick} variant="secondary" style={{marginLeft: "0.25%"}}>Learn More</Button>
        </div>
        <div>
            <p></p>
        </div>
        <div ref={ref} style={{width: "70%", height: "100%", backgroundImage: 'url("https://media.discordapp.net/attachments/1107858899463327824/1143902893104185406/be0e8c88-2cc2-46d2-98e8-6390bc97e876.png?width=704&height=469")', backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
        <br />
        <h1 style={{color: "black", textAlign: "right"}}>
            Exam overview
        </h1>
        <br />
        <div style={{width: "40%", float: "right"}}>
        <p style={{color: "black", textAlign: "justify", fontSize: "90%"}}>
            Ready to your career in IT Graduate Development Program? This exam tests your knowledge and skills related to:
            <p></p>
            <ul>
                <li>Object Oriented Programming</li>
                <li>Fundamental Programming</li>
                <li>Database</li>
            </ul>
        </p>
        </div>
        </div>
        <div style={{width: "100%", height: "100%"}}>
        <p></p>
        <br />
        <div style={{width: "35.6%", float: "right", height: "100%", backgroundImage: 'url("https://media.discordapp.net/attachments/1107858899463327824/1143911729705787412/tuxpi.com.1692800198.jpg?width=878&height=586")', backgroundSize: "contain", backgroundRepeat: "no-repeat"}}/>
        <div style={{width: "45%", float: "right"}}>
        <br /><br /><br /><br />
        <h2 style={{color: "black", textAlign: "justify"}}>
            Practice coding challenges & prepare for your test
        </h2>
        </div>
        </div>
        <div style={{position: "relative", bottom: "0", width: "100%"}}>
        <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase' style={{color: "black", textAlign: "left"}}>Footer text</h5>

            <p style={{color: "black", textAlign: "justify", fontSize: "90%"}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
              Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam,
              est atque cumque eum delectus sint!
            </p>
          </MDBCol>

          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase' style={{color: "black", textAlign: "left"}}>Footer text</h5>

            <p style={{color: "black", textAlign: "justify", fontSize: "90%"}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
              Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam,
              est atque cumque eum delectus sint!
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'black' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='https://www.amartek.id/'>
          AMARTEK
        </a>
      </div>
    </MDBFooter>
      </div>
      </div>
      
        </>
    )
}

export default Home;