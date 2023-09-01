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
import axios from 'axios'
import { useRef, useState, useEffect } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
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
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';

let UserResult = (props) => {
    const [ data, setData ] = useState([{}])
    const [ userData, setUserData ] = useState([{}])

    const userInfo = axios.get("http://localhost:8089/api/user/78");
    const totalScore = data[0]?.score + data[1]?.score + data[2]?.score + data[3]?.score + data[4]?.score;

    userInfo.then((response) => {
          setUserData(response.data.data)
          // console.log(userData?.test?.test_id);
      })

      useEffect(() => {
        axios({
            method: "GET",
            url: "http://localhost:8089/api/score/account/78"
        }).then((response) => {
            setData(response.data.data)
            console.log()
        }).catch((error)=> {
            console.log(error)
        })
    }, [])

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
                <Nav.Link href="/">
                    <button type="button" class="btn btn-outline-success btn-sm"><b>Logout</b></button>
                </Nav.Link>
                <Nav.Link href="home">
                    <img src="https://cdn-icons-png.flaticon.com/512/74/74807.png" width="32" height="32" style={{marginTop: "12%", marginLeft: "30%"}} />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
        <div style={{width: "100%", display: "flex",  position: "absolute", backgroundImage: "url('https://siegecyber.com.au/wp-content/uploads/2020/07/7.png')", backgroundSize: "100%", backgroundPositionY: "80%"}}>
        <div style={{width: "20%", height: "100%", paddingTop: "9%", paddingBottom: "3.3%", textAlign: "center"}}>
            <img src='https://p7.hiclipart.com/preview/355/848/997/computer-icons-user-profile-google-account-photos-icon-account.jpg' class="rounded-circle center" width="100" height="100"/>
        </div> 
        <div style={{width: "60%", height: "100%", color: "white", paddingTop: "9.4%", paddingBottom: "1%"}}>
        <h2 style={{textShadow: "0px 0px 20px white"}}><b>Congratulation, {userData.fullname}!</b></h2>
        <p style={{textShadow: "0px 0px 20px white"}}>You have completed your test! Please wait for your result! Thank you!</p>
        <p></p>
        </div>      
    </div>
    <div style={{width: "100%", height: "100%", paddingTop: "24%"}}>
    <div style={{width: "100%", display: "flex",  position: "relative"}}>
            <h1 style={{marginLeft: "auto", marginRight: "auto"}}>{totalScore > 65 ? "You passed our preliminary exam!" : "Lmao"}</h1>
        </div>
    <div style={{position: "relative", width: "100%", paddingTop: "6%"}}>
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
        </>
    )
    }
export default UserResult;