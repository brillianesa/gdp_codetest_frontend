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

let Question = () => {
    const [ data, setData ] = useState([{}])
    const [ dataTest, setDataTest ] = useState([{}])
    const [ adminData, setAdminData ] = useState([{}])
    const [ show, setShow ] = useState(false)
    const [ question_id, setQuestion_id ] = useState(0)
    const [ test, setTest ] = useState([{}])
    const [ test_id, setTestId ] = useState(0)
    const [ questiondetail, setQuestionDetail ] = useState("")
    const [ correctanswer, setCorrectAnswer ] = useState("")
    const [ image, setImage ] = useState("")
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [ status, setStatus ] = useState(false);
    const [editData, setEditData] = useState(null);
    const adminInfo = axios.get("http://localhost:8089/api/user/78");

    const onChangeTest = e => setTest(e.target.value);

    adminInfo.then((response) => {
          setAdminData(response.data.data)
      })

    useEffect(() => {
        axios({
            method: "GET",
            url: "http://localhost:8089/api/question/"
        }).then((response) => {
            setData(response.data.data)
            console.log()
        }).catch((error)=> {
            console.log(error)
        })
    }, [])

    useEffect(() => {
        axios({
            method: "GET",
            url: "http://localhost:8089/api/test/"
        }).then((response) => {
            setDataTest(response.data.data)
            console.log()
        }).catch((error)=> {
            console.log(error)
        })
    }, [])

    const onSubmit = () => {
        handleClose();

        let requestData = {
            "question_id" : question_id,
            "test" : {
              "test_id": test_id
          },
            "questiondetail": questiondetail,
            "correctanswer": correctanswer,
            "image": image
        }
        axios({
            method: editData ? "POST" : "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            url: "http://localhost:8089/api/question/",
            data: JSON.stringify(requestData)
          }).then((response) => {
            if (response.data.status === 200) {
              setStatus(true);
              console.log(test);
              console.log(test_id);
              console.log(test.test_id);
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
                url: "http://localhost:8089/api/question/" + id,
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

      const handleEdit = (rowData) => {
        setEditData(rowData);
        setQuestion_id(rowData.question_id);
        setTestId(rowData.test.test_id);
        setQuestionDetail(rowData.questiondetail);
        setCorrectAnswer(rowData.correctanswer);
        setImage(rowData.image);
        handleShow();
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
          <button disabled type="button" class="btn btn-primary btn-sm btn-block" style={{width:'70%'}}>
            Manage Question
          </button>
        </NavLink><br /><br />
        <NavLink to="/admin/test">
          <button type="button" class="btn btn-primary btn-sm btn-block" style={{width:'70%'}}>
            Manage Test
          </button>
        </NavLink><br /><br />
        <NavLink to="/admin/score">
          <button type="button" class="btn btn-primary btn-sm btn-block" style={{width:'70%'}}>
            Manage Score
          </button>
        </NavLink><br /><br /><br /><br />
        <NavLink to="/admin">
          <button type="button" class="btn btn-danger btn-sm btn-block" style={{width:'70%'}}>
            Back
          </button>
        </NavLink>
    </div>
    
    <div style={{width: "100%", height: "100%", paddingTop: "9%", paddingLeft: "5%"}}>
    <h2><b>Welcome back, {adminData.fullname}!</b></h2>
    
    <div style={{width: "100%", height: "100%", display: "flex",  position: "absolute"}}>
        <br />
        <br />
        <table className="table">
            <thead>
                <th>Question ID</th>
                <th>Test ID</th>
                <th>Question Detail</th>
                <th>Answer</th>
                <th>Image</th>
                <th><button style={{height: "30px", width: "100px"}} class="btn btn-outline-success btn-sm" onClick={handleShow}>Create</button></th>
                
            </thead>
            <tbody>
                {data.map(x => {
                    return (
                        <tr key={x.question_id}>
                          <td>{x.question_id}</td>
                          <td>{x?.test?.test_id}</td>
                            <td>{x.questiondetail}</td>
                            <td>{x.correctanswer}</td>
                            <td><img src={x.image} width='300px'></img></td>
                            
                            <td><button onClick={() => handleEdit(x)}>Edit</button> <button onClick={() => handleDelete(x.question_id)}>Delete</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title><Modal.Title>
                {editData ? "Edit Question" : "Create Question"}
                </Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                <input hidden placeholder="Question ID" value = {question_id} type="text" id="question_id" name="question_id" onChange={e => setQuestion_id(e.target.value)}/>
                </div><br />
                <div>
                        <select id='test_id' onChange={e => setTestId(e.target.value)} value={test_id}>
                            {dataTest.map(x => (
                                <option value={x.test_id}  key={x.test_id}>{x.name} </option>
                            ))}
                        </select>              
                                    {/* <input placeholder="Test ID" value = {test_id} type="text" id="test_id" name="test_id" onChange={e => setTestId(e.target.value)}/> */}

                    </div><br />
                <div>
                <input placeholder="Detail" value = {questiondetail} type="text" id="questiondetail" name="questiondetail" onChange={e => setQuestionDetail(e.target.value)}/>
                </div><br />
                <div>
                <input placeholder="Answer" value = {correctanswer} type="text" id="correctanswer" name="correctanswer" onChange={e => setCorrectAnswer(e.target.value)}/>
                </div><br />
                <div>
                <input placeholder="Image Link" value = {image} type="text" id="image" name="image" onChange={e => setImage(e.target.value)}/>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" class="btn btn-primary btn-sm" onClick={onSubmit}>
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

export default Question;