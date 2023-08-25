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

let Admin = (props) => {
    const ref = useRef(null);
    const [ data, setData ] = useState([{}])
    const [ show, setShow ] = useState(false);
    const [ fullname, setFullname ] = useState("")
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };
    
    useEffect((id) => {
      id = "1001"
      axios({
        method: "GET",
        url: 'http://localhost:8089/api/user/' + id
        })
        .then((response) => {
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
    <div style={{width: "100%", height: "100%", display: "flex",  position: "absolute"}}>
      <div style={{width: "30%", height: "100%", paddingTop: "9%", paddingBottom: "1%", backgroundImage: "linear-gradient(grey 44.5%, white 40%, #bfbfbf 100%)", boxShadow: "0px 0px 10px black", textAlign: "center"}}>
        <img src='https://p7.hiclipart.com/preview/355/848/997/computer-icons-user-profile-google-account-photos-icon-account.jpg' class="rounded-circle center" width="100" height="100"/>
        <h4 style={{color: "white", paddingTop: "2%", paddingBottom: "6%"}}><b>{data.fullname}</b></h4>
        <br />
          <NavLink to="/admin/user">
            <button type="button" class="btn btn-primary btn-sm btn-block" style={{width:'70%'}}>
              Manage User
            </button>
          </NavLink><br /><br />
          <NavLink to="/admin/question">
            <button type="button" class="btn btn-primary btn-sm btn-block" style={{width:'70%'}}>
              Manage Question
            </button>
          </NavLink><br /><br />
          <NavLink to="/admin/test">
            <button type="button" class="btn btn-primary btn-sm btn-block" style={{width:'70%'}}>
              Manage Test
            </button>
          </NavLink>
      </div>
      
      <div style={{width: "100%", paddingTop: "9%", paddingLeft: "5%"}}>
      <h2><b>Welcome back, {data.fullname}!</b></h2>
      </div>
      <div>

      </div>
    </div>
        </>
    )
}

export default Admin;