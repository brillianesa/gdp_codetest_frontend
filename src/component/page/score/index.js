import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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

let Score = () => {
    const [ data, setData ] = useState([{}])
    const [ dataScore, setDataScore ] = useState([{}])
    const [ adminData, setAdminData ] = useState([{}])
    const [ show, setShow ] = useState(false)
    const [ score_id, setScoreID ] = useState(0)
     const [ score, setScore ] = useState(0)
    const [ test, setTest ] = useState([{}])
    const [ test_id, setTestId ] = useState(0)
    const [ scoredetail, setScoreDetail ] = useState("")
    const [ correctanswer, setCorrectAnswer ] = useState("")
    const [ useranswer, setUserAnswer ] = useState("")
    const [ isCompleted, setIsCompleted ] = useState("")
    const [ image, setImage ] = useState("")
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [ status, setStatus ] = useState(false);
    const [editData, setEditData] = useState(null);
    
    const adminInfo = axios.get("http://localhost:8089/api/user/35");

    adminInfo.then((response) => {
          setAdminData(response.data.data)
      })

    useEffect(() => {
        axios({
            method: "GET",
            url: "http://localhost:8089/api/user/"
        }).then((response) => {
            setData(response.data.data)
            console.log()
        }).catch((error)=> {
            console.log(error)
        })
    }, [])

    

    

    const onSubmit = () => {
        handleClose();

        let requestData = {
            "score_id" : score_id,
            "score": score
        }
        axios({
            method: editData ? "POST" : "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            url: "http://localhost:8089/api/score/",
            data: JSON.stringify(requestData)
          }).then((response) => {
            if (response.data.status === 200) {
              setStatus(true);
              console.log(requestData);
            }
          }).catch((error) => {
            console.log(error);
          }).finally(() => {
            setStatus(false);
            setEditData(null);
          });
    }

    const handleDelete = (id) => {
        Swal.fire({
          title: "Delete Data?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Delete",
        }).then((result) => {
          if (result.isConfirmed) {
            axios({
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                },
                url: "http://localhost:8089/api/score/" + id,
            }).then((response) => {
                if(response.data.status === 200){
                    setStatus(true)
                }
            }).catch((error)=> {
                console.log(error)
            }).finally(()=>{
                setStatus(false)
            })
      
            Swal.fire("Data has been deleted", "", "success");
          }
        });
      };

      const handleEdit = (user_id) => {
            axios({
                method: "GET",
                url: "http://localhost:8089/api/score/account/" + user_id
            }).then((response) => {
                setDataScore(response.data.data)
                console.log(response.data.data)
            }).catch((error)=> {
                console.log(error)
            })
            handleShow();
      }

     

      const handleTextClick = score_id => e => {
  
        dataScore
          .filter(br => br.score_id === score_id)
          .forEach(item => {
            item.score = e.target.value;

            
            let requestData = {
                "score_id" : item.score_id,
                "account" : {
                "account_id": item.account.account_id,
                },
                "question": {
                    "question_id": item.question.question_id,
                },
                "score": item.score,
                "useranswer": item.useranswer
            }
            axios({
                method: editData ? "POST" : "POST",
                headers: {
                  'Content-Type': 'application/json',
                },
                url: "http://localhost:8089/api/score/",
                data: JSON.stringify(requestData)
              }).then((response) => {
                if (response.data.status === 200) {
                  setStatus(true);
                  console.log(requestData);
                }
              }).catch((error) => {
                console.log(error);
              }).finally(() => {
                setStatus(false);
                setEditData(null);
              });
          });

        console.log(dataScore);

        
      };

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
          <Nav.Link href="/home">
              <img src="https://cdn-icons-png.flaticon.com/512/74/74807.png" width="32" height="32" style={{marginTop: "12%", marginLeft: "30%"}} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  <div style={{width: "100%", height: "100%", display: "flex",  position: ""}}>
    <div style={{width: "30%", height: "100%", paddingTop: "9%", paddingBottom: "1%", backgroundImage: "linear-gradient(grey 44.5%, white 40%, #bfbfbf 100%)", boxShadow: "0px 0px 10px black", textAlign: "center"}}>
      <img src='https://p7.hiclipart.com/preview/355/848/997/computer-icons-user-profile-google-account-photos-icon-account.jpg' class="rounded-circle center" width="100" height="100"/>
      <h4 style={{color: "white", paddingTop: "2%", paddingBottom: "6%"}}><b>{adminData.fullname}</b></h4>
      <br />
      <NavLink to="/admin/user">
          <button type="button" class="btn btn-primary btn-sm btn-block" style={{width:'70%'}}>
            Manage User
          </button>
        </NavLink><br /><br />
        <NavLink to="/admin/role">
          <button type="button" class="btn btn-primary btn-sm btn-block" style={{width:'70%'}}>
            Manage Role
          </button>
        </NavLink><br /><br />
        <NavLink to="/admin/question">
          <button  type="button" class="btn btn-primary btn-sm btn-block" style={{width:'70%'}}>
            Manage Question
          </button>
        </NavLink><br /><br />
        <NavLink to="/admin/test">
          <button type="button" class="btn btn-primary btn-sm btn-block" style={{width:'70%'}}>
            Manage Test
          </button>
        </NavLink><br /><br />
        <NavLink to="/admin/score">
          <button disabled type="button" class="btn btn-primary btn-sm btn-block" style={{width:'70%'}}>
            Manage Score
          </button>
        </NavLink><br /><br /><br /><br />
        <NavLink to="/admin">
          <button type="button" class="btn btn-danger btn-sm btn-block" style={{width:'70%'}}>
            Back
          </button>
        </NavLink>
    </div>
    
    <div style={{width: "100%", paddingTop: "9%", paddingLeft: "5%"}}>
    <h2><b>Welcome back, {adminData.fullname}!</b></h2>
    
    <div style={{display: "flex",  position: "absolute"}}>
        <br />
        <br />
        <table className="table">
            <thead>
                <th>Account ID</th>
                <th>Name</th>
                <th>Test</th>
                <th>Completed</th>
                <th>Action</th>
            </thead>
            <tbody>
                {data.map(x => {
                    return (
                        <tr key={x.user_id}>
                            <td>{x.user_id}</td>
                          <td>{x.fullname}</td>
                          <td>{x.test?.name}</td>
                          <td>{x.iscompleted ? "Completed" : "Not Yet"}</td>
                            <td><button style={{height: "30px", width: "100px"}} class="btn btn-outline-primary btn-sm" onClick={() => handleEdit(x.user_id)}>View</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title><Modal.Title>
                {editData ? "Edit Score" : "Create Score"}
                </Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <table className="table">
            <thead>
                <th hidden >Question ID</th>
                <th>Question Detail</th>
                <th>Image</th>
                <th>Expected</th>
                <th>Answer</th>
                <th>Score (1-20)</th>
            </thead>
            <tbody>
                {dataScore.map(x => {
                    return (
                        <tr key={x.score_id}>
                            <td hidden >{x.score_id}</td>
                            <td hidden>{x?.question?.question_id}</td>
                            <td>{x?.question?.questiondetail}</td>
                            <td><img src= {x?.question?.image} width="50"></img></td>
                            <td>{x?.question?.correctanswer}</td>
                          <td>{x.useranswer}</td>
                          <td hidden><input  placeholder="Score ID" value = {x.score_id} type="text" id="score_id" name="score_id" onChange={e => setScoreID(e.target.value)}/></td>
                          <td>{
                <input style={{width: '100%'}} placeholder="Score" defaultValue = {x.score} type="text" id="score" name="score" onClick={handleTextClick} onChange={handleTextClick(x.score_id)}/>}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" class="btn btn-primary btn-sm" onClick={handleClose}>
                Save
                </Button>
                <Button variant="secondary" class="btn btn-secondary btn-sm" onClick={handleClose}>
                Close
                </Button>
            </Modal.Footer>
        </Modal>
      </div>
    </div>
  </div>
      </>
    )
}

export default Score;