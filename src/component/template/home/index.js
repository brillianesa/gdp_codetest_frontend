import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React from "react";
import logo from '../../../logo.svg';
import Swal from "sweetalert2";
import { useRef, useState } from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
  } from 'mdb-react-ui-kit';
import axios from 'axios'
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';

let Home = (props) => {
    const ref = useRef(null);
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ userRole, setRole ] = useState(0);
    const [ adminData, setAdminData ] = useState([{}]);
    const [ show, setShow ] = useState(false);
    const [ status, setStatus ] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const adminInfo = axios.get("http://localhost:8089/api/account/1001");

    adminInfo.then((response) => {
          setAdminData(response.data.data)
      })

    const login = () => {
      handleClose()

      let requestData = {
        "email"   : email,
        "password": password
      }
      axios({
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        url: "http://localhost:8089/api/account/login",
        data: JSON.stringify(requestData)
      }).then((response) => {
        if (response.data.status === 200) {
          setStatus(true);
          localStorage.setItem("userInfo", JSON.stringify(response.data.result));
          console.log(localStorage.getItem("userInfo"));
        }
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        setStatus(false);
      });
    }

    return (
        <>

        <div>
            
        <Navbar collapseOnSelect
                expand="lg"
                className="bg-body-tertiary fixed-navbar">
      <Container>
        <Navbar.Brand href="/home">
        <img src="https://www.amartek.id/i/logo/weblogo-amartek.png" height="40"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='justify-content-end' style={{ width: "100%" }}>
            <Nav.Link href="https://www.amartek.id/">
                <button type="button" class="btn btn-outline-primary btn-sm"><b>About Us</b></button>
            </Nav.Link>
            <Nav.Link href={adminData.role_id = 2001 ? "" : "/user"}>
                <button type="button" onClick={handleShow} class="btn btn-outline-success btn-sm"><b>{adminData.role_id = 2001 ? "Login" : "Take Test"}</b></button>
            </Nav.Link>
            <Nav.Link href="home">
                <img src="https://cdn-icons-png.flaticon.com/512/74/74807.png" width="32" height="32" style={{marginTop: "12%", marginLeft: "30%"}} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

      <div  name="mainpage" style={{marginBottom: '20px', backgroundImage: 'url("https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1tZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80")', backgroundSize: "contain", backgroundSize: "100%", backgroundPositionY: "50%", textAlign: "center", color: "white", width: "100%", height: "50vh", marginTop: "6%"}}>
        <div style={{paddingTop: "7%"}}>
        <h1 style={{textShadow: "0px 0px 20px white"}}>AMARTEK CODE TEST</h1>
        <p>A preliminary test for IT Graduate Development Program</p>
        <Button href={!adminData.iscomplete ? "/user" : "/result"} variant="primary" className="mr-3 btn-sm" style={{marginRight: "0.25%"}}><b>Take an exam</b></Button>
        <Button onClick={handleClick} variant="secondary" className='btn-sm' style={{marginLeft: "0.25%"}}><b>Learn More</b></Button>
        </div>
        <div ref={ref} style={{paddingTop: "5.8%"}}>
        </div>
        <div style={{width: "70%", height: "100%", marginTop: '70px',backgroundImage: 'url("https://media.discordapp.net/attachments/1107858899463327824/1144102737705963560/tuxpi.com.1692845743.jpg?width=704&height=469")', backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
        <br />
        <h1 style={{color: "black", textAlign: "right", marginTop: '60px'}}>
            Exam overview
        </h1>
        <br />
        <div style={{width: "40%", float: "right"}}>
        <p style={{color: "black", textAlign: "justify", fontSize: "90%"}}>
            Ready to start your career in IT Graduate Development Program? This exam tests your knowledge and skills related to:
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
        <div style={{width: "35.6%", float: "right", height: "100%", backgroundImage: 'url("https://media.discordapp.net/attachments/1107858899463327824/1144102463599816845/tuxpi.com.1692845677.jpg?width=878&height=586")', backgroundSize: "contain", backgroundRepeat: "no-repeat"}}/>
        <div style={{width: "45%", float: "right"}}>
        <br /><br /><br /><br />
        <h2 style={{color: "black", textAlign: "justify"}}>
            Practice coding challenges & prepare for your test
        </h2>
        </div>
        </div>
        <div style={{width: '100%', height: '150%', marginTop: '5%', alignContent: "center", backgroundImage: 'url("https://media.discordapp.net/attachments/1107858899463327824/1144101544665555015/tuxpi.com.1692845458.jpg?width=878&height=586")', backgroundSize: '100%', backgroundRepeat: "no-repeat", backgroundPositionX: "center"}}>
        <h1 style={{textShadow: "0px 0px 20px white", color: "white" , textAlign: "center", paddingTop: '14%'}}>
            <b>
            Take your test anytime
            <br />
            anywhere in a highly secure environment
            </b>
        </h1>
        </div>
        <div style={{position: "relative", bottom: "0", width: "100%"}}>
        <MDBFooter bgColor='light' className='text-center text-lg-left'>
        <MDBContainer className='p-4'>
          <MDBRow>
            <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase' style={{color: "black", textAlign: "left"}}>Bumi Amartha Teknologi Mandiri</h5>

              <p style={{color: "black", textAlign: "justify", fontSize: "90%"}}>
              PT. Bumi Amartha Teknologi Mandiri (AMARTEK) is a system integrator devoted to offering the highest value to our customers. Amartek provides domain and advisory expertise which comes with Data & Analytics, Outcome based Services, Integration & Automation, Talent Augmentation. Amartek was established in 2018 with the purpose of delivering a large stack of IT services globally.
              </p>
            </MDBCol>

          <MDBCol lg='3' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase' style={{color: "black", textAlign: "left"}}>About Us</h5>
            <ul className='list-unstyled mb-0' style={{color: "black", textAlign: "left"}}>
                <li>
                  <a style={{textDecoration: "None"}} href='https://www.amartek.id/about/overview' className='text-dark'>
                    Company Overview
                  </a>
                </li>
                <li>
                  <a style={{textDecoration: "None"}} href='https://www.amartek.id/about/ceo-notes' className='text-dark'>
                    CEO Notes
                  </a>
                </li>
                <li>
                  <a style={{textDecoration: "None"}} href='https://www.amartek.id/about/people' className='text-dark'>
                    Executive Profiles
                  </a>
                </li>
              </ul>
          </MDBCol>

          <MDBCol lg='3' md='12' className='mb-4 mb-md-0'>
          <h5 className='text-uppercase' style={{color: "black", textAlign: "left"}}>Contact</h5>
          <div>
          <p style={{color: "black", textAlign: "left"}}>
                <MDBIcon icon="home" className="me-2" />
                Chase Plaza 9th Floor, Jl Jend. Sudirman Kav 21, Karet, Setiabudi, Jakarta Selatan 12920. Indonesia
              </p>
              <p style={{color: "black", textAlign: "left"}}>
                <MDBIcon icon="envelope" className="me-3" />
                  sales@batmandiri.com
              </p>
              <p style={{color: "black", textAlign: "left"}}>
                <MDBIcon icon="phone" className="me-3" /> +62 21 3973 7000
              </p>
        </div>
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
      

      <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title><Modal.Title>
                Login
                </Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div class="form-group">
              <label>Email</label>
              <input type="email"  class="form-control" id="email" placeholder="Enter Name"
              
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              
              />

              <br />
              
                <label>Password</label>
                <input type="password"  class="form-control" id="password" placeholder="Enter Password"
                
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                
                />
            </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="primary" class="btn btn-primary btn-sm" onClick={login} href={adminData.role_id = 2001 ? "/admin" : "/home"}>
                Login
                </Button>
                <Button variant="secondary" class="btn btn-secondary btn-sm" onClick={handleClose}>
                Close
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default Home;