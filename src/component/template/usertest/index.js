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

let UserTest = (props) => {
    const [ data, setData ] = useState([{}])
    const [ userData, setUserData ] = useState([{}])
    const [ show, setShow ] = useState(false)
    
    const [ confirm, setConfirm ] = useState(false)
    const handleExit = () => setConfirm(false)
    const handleShowConfirm = () => setConfirm(true);

    const [ correctAnswer, setCorrectAnswer ] = useState("")
    const [ image, setImage ] = useState("")
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [ status, setStatus ] = useState(false);
    const [editData, setEditData] = useState(null);
    const [ datascore, setScoreData ] = useState([{}])
    const[score, setScore] = useState([{}]);
    const[score_id, setScoreID] = useState(0);
    const[account_id, setAccountID] = useState(0);
    const[user_id, setUserID] = useState(0);
    const [useranswer, setUserAnswer] = useState("");
    const [ question, setQuestion ] = useState([{}]);
    const [ question_id, setQuestionID ] = useState(0)
    const [ questionDetail, setQuestionDetail ] = useState("");
    const [ account, setAccount ] = useState([{}]);
    const [ test, setTest ] = useState([{}]);
    const [ test_id, setTestID ] = useState(0);

    const [refNumber, setRefNumber] = useState(0);
    const [ completeTest, setCompleteTest ] = useState("");

    const userInfo = axios.get("http://localhost:8089/api/user/78");
    

    userInfo.then((response) => {
          setUserData(response.data.data)
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

    const onSubmit = () => {
        handleClose();

        let requestData = {
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

        axios({
            method: editData ? "POST" : "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            url: "http://localhost:8089/api/score/",
            data: JSON.stringify(requestData)
          }).then((response) => {
            if (response.data.status === 200) {
              console.log(requestData);
              setStatus(true);
            }
          }).catch((error) => {
            console.log(requestData)
            console.log(error);
          }).finally(() => {
            setStatus(false);
            setEditData(null);
          });
    }

      const onConfirm = () => {
        let requestData = {
          "user_id" : userData.user_id,
          "fullname": userData.fullname,
          "dateofbirth": userData.dateofbirth,
          "address": userData.address,
          "phonenumber": userData.phonenumber,
          "gender": userData.gender,
          "iscompleted": completeTest,
          "test" : {
            "test_id": userData?.test?.test_id,
            }
        }

        axios({
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            url: "http://localhost:8089/api/user/",
            data: JSON.stringify(requestData)
          }).then((response) => {
            if (response.data.status === 200) {
              console.log(requestData);
              setStatus(true);
            }
          }).catch((error) => {
            console.log(requestData)
            console.log(error);
          }).finally(() => {
            setStatus(false);
          });
      }

      const handleConfirm = () => {
        setCompleteTest(true);
        setRefNumber(4);
        handleShowConfirm();
      }

      const handleEdit = (rowData) => {
        setEditData(rowData);
        setImage(rowData.question.image);
        setScoreID(rowData.score_id);
        setAccountID(rowData.account.account_id);
        setQuestionID(rowData.question.question_id);
        setTestID(rowData.account.user.test.test_id);
        setUserAnswer(rowData.useranswer);
        setQuestionDetail(rowData.question.questiondetail)
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
        <h2 style={{textShadow: "0px 0px 20px white"}}><b>Welcome back, {userData.fullname}!</b></h2>
        <p style={{textShadow: "0px 0px 20px white"}}>In this exam you are given a set of 5 questions to test your knowledge in database and programming language skills. You can view your score after submission. <b>Good luck!</b></p>
        <p></p>
        </div>      
    </div>
    <div style={{width: "100%", height: "100%", paddingTop: "24%"}}>
    <div style={{width: "80%", display: "flex",  position: "relative", paddingLeft: "20%"}}>
        <br />
        <br />
        <table className="table" style={{width:"100%"}}>
            <thead style={{textAlign: "left"}}>
                <th></th>
                
                <th style={{textAlign: "center"}}></th>
            </thead>
            <tbody style={{textAlign: "left"}}>
              <tr key={data[refNumber]?.question?.question_id}>
                <td>{data[refNumber]?.question?.questiondetail}</td>
                <td style={{textAlign: "center", top: "1000"}}><img src={data[refNumber]?.question?.image} width="300"></img></td>
              </tr>
              <tr>
                <td style={{width: "41%"}}>
                  <button onClick={() => refNumber>0 ? setRefNumber(refNumber-1) : setRefNumber(0)} class="btn btn-outline-danger btn-sm">Back</button>
                </td>
                
                <td>
                <button onClick={() => handleEdit(data[refNumber])} class="btn btn-outline-primary btn-sm">Answer</button>
                <button onClick={() => refNumber < 4 ? setRefNumber(refNumber+1) : handleConfirm()} style={{float: "right"}} class="btn btn-outline-success btn-sm">Next</button>
                </td>
              </tr>
            </tbody>
        </table>

        <Modal show={confirm} onHide={handleExit}>
          <Modal.Header closeButton>
            <Modal.Title>
              <b>Please confirm your answers</b>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <img src={data[0]?.question?.image} width="100%"/>
              <br />
              <b>{data[0]?.question?.questiondetail}</b>
              <br />
              <u>{data[0]?.useranswer}</u>
              <br /><br />
              <img src={data[1]?.question?.image} width="100%"/>
              <br />
              <b>{data[1]?.question?.questiondetail}</b>
              <br />
              <u>{data[1]?.useranswer}</u>
              <br /><br />
              <img src={data[2]?.question?.image} width="100%"/>
              <br />
              <b>{data[2]?.question?.questiondetail}</b>
              <br />
              <u>{data[2]?.useranswer}</u>
              <br /><br />
              <img src={data[3]?.question?.image} width="100%"/>
              <br />
              <b>{data[3]?.question?.questiondetail}</b>
              <br />
              <u>{data[3]?.useranswer}</u>
              <br /><br />
              <img src={data[4]?.question?.image} width="100%"/>
              <br />
              <b>{data[4]?.question?.questiondetail}</b>
              <br />
              <u>{data[4]?.useranswer}</u>
            </div>
          </Modal.Body>
          <Modal.Footer>
                <Button variant="primary" class="btn btn-primary btn-sm" onClick={() => {onConfirm()}} href="/result">
                Submit
                </Button>
                <Button variant="secondary" class="btn btn-secondary btn-sm" onClick={handleExit}>
                Close
                </Button>
            </Modal.Footer>
        </Modal>

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
                <Button variant="primary" class="btn btn-primary btn-sm" onClick={() => {onSubmit()}}>
                Save
                </Button>
                <Button variant="secondary" class="btn btn-secondary btn-sm" onClick={handleClose}>
                Close
                </Button>
            </Modal.Footer>
        </Modal>
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

export default UserTest;