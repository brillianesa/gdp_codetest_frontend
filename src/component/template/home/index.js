


import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React from "react";
import logo from '../../../logo.svg';
import { useRef } from 'react';


import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import NavBar from '../../organism/NavBar';
import Footer from '../../organism/Footer';

let Home = (props) => {
    const ref = useRef(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
        <NavBar></NavBar>
        <div>
            
       
    </div>

      <div name="mainpage" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1tZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80")', backgroundSize: "contain", backgroundSize: "100%", backgroundPositionY: "50%", textAlign: "center", color: "white", width: "100%", height: "50vh"}}>
        <div style={{paddingTop: "7%"}}>
        <h1 style={{textShadow: "0px 0px 30px white"}}>AMARTEK CODE TEST</h1>
        <p>A preliminary test for IT Graduate Development Program</p>
        <Button variant="primary" className="mr-3 btn-sm" style={{marginRight: "0.25%"}}>Take an exam</Button>
        <Button onClick={handleClick} variant="secondary" className='btn-sm' style={{marginLeft: "0.25%"}}>Learn More</Button>
        </div>
        <div style={{paddingTop: "5.8%"}}>
        </div>
        <div ref={ref} style={{width: "70%", height: "100%", backgroundImage: 'url("https://media.discordapp.net/attachments/1107858899463327824/1144102737705963560/tuxpi.com.1692845743.jpg?width=704&height=469")', backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
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
        <Footer></Footer>
      </div>
      </div>
      
        </>
    )
}

export default Home;