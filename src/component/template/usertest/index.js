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

<<<<<<< Updated upstream
let User = (props) => {
    const [ data, setData ] = useState([{}])
    const [ adminData, setAdminData ] = useState([{}])
    const [ show, setShow ] = useState(false)
    const [ question_id, setQuestion_id ] = useState(0)
    const [ test_id, setTest_id ] = useState(0)
    const [ questionDetail, setQuestionDetail ] = useState("")
=======
let UserTest = (props) => {
    const [ data, setData ] = useState([{}])
    const [ userData, setUserData ] = useState([{}])
    const [ show, setShow ] = useState(false)
    
>>>>>>> Stashed changes
    const [ correctAnswer, setCorrectAnswer ] = useState("")
    const [ image, setImage ] = useState("")
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [ status, setStatus ] = useState(false);
    const [editData, setEditData] = useState(null);
<<<<<<< Updated upstream
    const adminInfo = axios.get("http://localhost:8089/api/user/1001");

    adminInfo.then((response) => {
          setAdminData(response.data.data)
          console.log()
      })

    useEffect(() => {
        axios({
            method: "GET",
            url: "http://localhost:8089/api/question/"
=======

    const [ datascore, setScoreData ] = useState([{}])
    const[score, setScore] = useState([{}]);
    const[score_id, setScoreID] = useState(0);
    const[account_id, setAccountID] = useState(0);
    const [useranswer, setUserAnswer] = useState("");
    const [ question, setQuestion ] = useState([{}]);
    const [ question_id, setQuestionID ] = useState(0)
    const [ questionDetail, setQuestionDetail ] = useState("");
    const [ account, setAccount ] = useState([{}]);
    const [ test, setTest ] = useState([{}]);
    const [ test_id, setTestID ] = useState(0);

    //Used to move to the next / previous question page
    const [refNumber, setRefNumber] = useState(0);

    const userInfo = axios.get("http://localhost:8089/api/user/1001");
    

    userInfo.then((response) => {
          setUserData(response.data.data)
          // console.log(userData?.test?.test_id);
      })

      useEffect(() => {
        axios({
            method: "GET",
            url: "http://localhost:8089/api/score/account/1001"
>>>>>>> Stashed changes
        }).then((response) => {
            setData(response.data.data)
            console.log()
        }).catch((error)=> {
            console.log(error)
        })
    }, [])

<<<<<<< Updated upstream
=======
      useEffect(() => {
        axios({
            method: "GET",
            url: "http://localhost:8089/api/score/"
        }).then((response) => {
            setScoreData(response.data.data)
            console.log()
        }).catch((error)=> {
            console.log(error)
        })
    }, [])

>>>>>>> Stashed changes
    const onSubmit = () => {
        handleClose();

        let requestData = {
<<<<<<< Updated upstream
            "question_id" : question_id,
            "test" : {
              "test_id":  test_id
            },
            "questiondetail": questionDetail,
            "correctanswer": correctAnswer,
            "image": image
        }
=======
          "score_id": score_id,
          "account": {
            "account_id" : account_id
          },
            "question": {
              "question_id" : question_id,
            },
            "questiondetail": questionDetail,
            "useranswer": useranswer
        }

>>>>>>> Stashed changes
        axios({
            method: editData ? "POST" : "POST",
            headers: {
              'Content-Type': 'application/json',
            },
<<<<<<< Updated upstream
            url: "http://localhost:8089/api/question/",
            data: JSON.stringify(requestData)
          }).then((response) => {
            if (response.data.status === 200) {
              setStatus(true);
            }
          }).catch((error) => {
=======
            url: "http://localhost:8089/api/score/",
            data: JSON.stringify(requestData)
          }).then((response) => {
            if (response.data.status === 200) {
              console.log(requestData);
              setStatus(true);
            }
          }).catch((error) => {
            console.log(requestData)
>>>>>>> Stashed changes
            console.log(error);
          }).finally(() => {
            setStatus(false);
            setEditData(null);
          });
    }

      const handleEdit = (rowData) => {
        setEditData(rowData);
<<<<<<< Updated upstream
        setQuestion_id(rowData.question_id);
        setTest_id(rowData.test_id);
        setQuestionDetail(rowData.questiondetail);
        setCorrectAnswer(rowData.correctanswer);
        setImage(rowData.image);
        handleShow();
      }
=======
        setImage(rowData.question.image);
        setScoreID(rowData.score_id);
        setAccountID(rowData.account.account_id);
        setQuestionID(rowData.question.question_id);
        setTestID(rowData.account.user.test.test_id);
        setUserAnswer(rowData.useranswer);
        setQuestionDetail(rowData.question.questiondetail)
        handleShow();
      
    }
>>>>>>> Stashed changes
    
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
<<<<<<< Updated upstream
        <h2 style={{textShadow: "0px 0px 20px white"}}><b>Welcome back, {adminData.fullname}!</b></h2>
=======
        <h2 style={{textShadow: "0px 0px 20px white"}}><b>Welcome back, {userData.fullname}!</b></h2>
>>>>>>> Stashed changes
        <p style={{textShadow: "0px 0px 20px white"}}>In this exam you are given a set of 5 questions to test your knowledge in database and programming language skills. You can view your score after submission. <b>Good luck!</b></p>
        <p></p>
        </div>      
    </div>
    <div style={{width: "100%", height: "100%", paddingTop: "24%"}}>
    <div style={{width: "80%", display: "flex",  position: "absolute", paddingLeft: "20%"}}>
        <br />
        <br />
        <table className="table">
            <thead style={{textAlign: "left"}}>
<<<<<<< Updated upstream
                <th>Question</th>
                <th style={{textAlign: "center"}}>Image</th>
            </thead>
            <tbody style={{textAlign: "left"}}>
                {data.map(x => {
                    return (
                      <>
                        <tr key={x.question_id}>
                            <td>{x.questiondetail}</td>
                            
                            <td style={{textAlign: "center", top: "1000"}}><img src={x.image} width="300"></img></td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={() => handleEdit(x)} class="btn btn-outline-success btn-sm">Answer</button>
                            </td>
                            <td>
                                
                            </td>
                        </tr>
                        <tr style={{borderBottom: "hidden"}}>
                            <td>

                            </td>
                            <td>
                              
                            </td>
                        </tr>
                      </>
                    )
                })}
=======
                <th></th>
                
                <th style={{textAlign: "center"}}></th>
            </thead>
            <tbody style={{textAlign: "left"}}>
              <tr key={data[refNumber]?.question?.question_id}>
                <td>{data[refNumber]?.question?.questiondetail}</td>
                <td style={{textAlign: "center", top: "1000"}}><img src={data[refNumber]?.question?.image} width="300"></img></td>
              </tr>
              <tr>
                <td>
                <button onClick={() => handleEdit(data[refNumber])} class="btn btn-outline-success btn-sm">Answer</button>
                </td>
                
                <td>
                <button onClick={() => refNumber>0 ? setRefNumber(refNumber-1) : setRefNumber(0)} class="btn btn-outline-danger btn-sm" style={{float: "right"}}>Back</button>
                </td>
              </tr>
>>>>>>> Stashed changes
            </tbody>
        </table>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title><Modal.Title>
                <b>Answer</b>
                </Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                <img src={image} width="300"></img>
                <br />
                <b>{questionDetail}</b>
<<<<<<< Updated upstream
                <input hidden placeholder="Question ID" value = {question_id} type="text" id="question_id" name="question_id" onChange={e => setQuestion_id(e.target.value)}/>
                </div><br />
                <div>
                <textarea placeholder="Answer" rows="8" style={{width: "100%", height: "100%"}} value = {correctAnswer} type="text" id="correctAnswer" name="correctAnswer" onChange={e => setCorrectAnswer(e.target.value)}/>
                </div><br />
                <div>
                <input hidden placeholder="Test ID" value = {test_id} type="text" id="test_id" name="test_id" onChange={e => setTest_id(e.target.value)}/>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" class="btn btn-primary btn-sm" onClick={onSubmit}>
=======
                <div hidden>
                <input  placeholder="Score ID" value = {score_id} type="text" id="score_id" name="score_id" onChange={e => setScoreID(e.target.value)}/>
                </div>
                <div hidden>
                <input  hidden placeholder="Account ID" value = {account_id} type="text" id="account_id" name="account_id" onChange={e => setAccountID(e.target.value)}/>
                </div>
                <div hidden>
                <input  placeholder="Question ID" value = {question_id} type="text" id="question_id" name="question_id" onChange={e => setQuestionID(e.target.value)}/>
                </div><br />
                <div>
                <textarea placeholder="Answer" rows="8" style={{width: "100%", height: "100%"}} value = {useranswer} type="text" id="useranswer" name="useranswer" onChange={e => setUserAnswer(e.target.value)}/>
                </div><br />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" class="btn btn-primary btn-sm" onClick={() => {onSubmit(); refNumber < 4 ? setRefNumber(refNumber+1) : setRefNumber(4)}}>
>>>>>>> Stashed changes
                Save
                </Button>
                <Button variant="secondary" class="btn btn-secondary btn-sm" onClick={handleClose}>
                Close
                </Button>
            </Modal.Footer>
        </Modal>
        </div>
    </div>
    </>
    )
}

<<<<<<< Updated upstream
export default User;
=======
export default UserTest;
>>>>>>> Stashed changes
