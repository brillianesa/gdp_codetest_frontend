import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Route, NavLink, HashRouter } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const User = () => {
    const [ adminData, setAdminData ] = useState([{}])
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [id, setId] = useState(0);
    const [email, setEmail] = useState("");
    const [fullname, setFullname] = useState("");
    const [dateofbirth, setDateOfBirth] = useState(null);
    const [gender, setGender] = useState("");
    const [iscompleted, setIsCompleted] = useState(false);
    const [address, setAddress] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [account, setAccount] = useState("");
    const [ account_id, setAccountID ] = useState(0);
    const [role, setRole] = useState([]);
    const [role_id, setRoleID] = useState(0)
    const [ status, setStatus ] = useState(false);
    const [editData, setEditData] = useState(null);
    const [test, setTest] = useState([]);
    const [ test_id, setTestID ] = useState(0);
    const [ user, setUser ] = useState([]);
    const [ user_id, setUserID ]= useState(0);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const adminInfo = axios.get("http://localhost:8089/api/user/1001");

    adminInfo.then((response) => {
          setAdminData(response.data.data)
          console.log()
      })

    useEffect(() => {
        axios({
            method: "GET",
            url: "http://localhost:8089/api/account/"
        }).then((response) => {
            setData(response.data.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    useEffect(() => {
        axios({
            method: "GET",
            url: "http://localhost:8089/api/role/"
        }).then((response) => {
            setRole(response.data.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    useEffect(() => {
        axios({
            method: "GET",
            url: "http://localhost:8089/api/test/"
        }).then((response) => {
            setTest(response.data.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    useEffect(() => {
        axios({
            method: "GET",
            url: "http://localhost:8089/api/user/"
        }).then((response) => {
            setUser(response.data.data); 
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    const onSubmit = () => {
        handleClose();

        let requestData = {
            "id": id,
            "email": email,
            "fullname": fullname,
            "dateofbirth": dateofbirth,
            "gender": gender,
            "iscompleted": iscompleted,
            "address": address,
            "phonenumber": phonenumber,
            "password": password,
            "role": {
                "role_id": role_id
            },
            "user": {
                "user_id": user_id
            },
            "test": {
                "test_id": test_id
            }
                

        };
        

        axios({
            method: editData ? "POST" : "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            url: "http://localhost:8089/api/account/register",
            data: JSON.stringify(requestData)
        }).then((response) => {
            if (response.data.status === 200) {
                console.log(response);
                setStatus(true);
            }
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            setStatus(false);
            setEditData(null);
        });
    };

    const handleDelete = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axios({
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                },
                url: "http://localhost:8089/api/account/"+ id,
            }).then((response) => {
                if(response.data.status === 200){
                    setStatus(true)
                }
            }).catch((error)=> {
                console.log(error)
            }).finally(()=>{
                setStatus(false)
            })
      
            Swal.fire("Deleted!", "Your data has been deleted.", "success");
          }
        });
      };

      const handleEdit = (rowData) => {
        setEditData(rowData);
        console.log(rowData);
        console.log(rowData.account_id);
        console.log(rowData.email);
        console.log(rowData.password);
        console.log(rowData.user.fullname);
        console.log(rowData.user.dateofbirth);
        console.log(rowData.user.gender);
        console.log(rowData.user.iscompleted);
        console.log(rowData.user.address);
        console.log(rowData.user.phonenumber);
        console.log(rowData.role.role_id);
        // console.log(rowData.user_id);
        console.log(rowData.user.test.test_id);
        if (rowData) {
            setId(rowData.account_id);
            setEmail(rowData.email);
            setPassword(rowData.password);
            setFullname(rowData.user.fullname);
            const selectedDate = new Date(rowData.user.dateofbirth);
            const formattedDate = `${selectedDate.getFullYear()}-${(selectedDate.getMonth() + 1)
                .toString()
                .padStart(2, '0')}-${selectedDate.getDate().toString().padStart(2, '0')}`;
            setDateOfBirth(formattedDate);
            setGender(rowData.user.gender);
            setIsCompleted(rowData.user.iscompleted);
            setAddress(rowData.user.address);
            setPhoneNumber(rowData.user.phonenumber);
            setRoleID(rowData.role.role_id);
            // setUserID(rowData.user_id);
            setTestID(rowData.user.test.test_id);
        }
        handleShow();
    };
    
    //   let requestData = {
    //     "id": id,
    //     "email": email,
    //     "fullname": fullname,
    //     "dateofbirth": dateofbirth,
    //     "gender": gender,
    //     "iscompleted": iscompleted,
    //     "address": address,
    //     "phonenumber": phonenumber,
    //     "password": password,
    //     "role": {
    //         "role_id": role_id
    //     }
            

    // };
    

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
  <div style={{width: "100%", height: "100%", display: "flex",  position: "absolute"}}>
    <div style={{width: "30%", height: "100%", paddingTop: "9%", paddingBottom: "1%", backgroundImage: "linear-gradient(grey 44.5%, white 40%, #bfbfbf 100%)", boxShadow: "0px 0px 10px black", textAlign: "center"}}>
      <img src='https://p7.hiclipart.com/preview/355/848/997/computer-icons-user-profile-google-account-photos-icon-account.jpg' class="rounded-circle center" width="100" height="100"/>
      <h4 style={{color: "white", paddingTop: "2%", paddingBottom: "6%"}}><b>{adminData.fullname}</b></h4>
      <br />
        <NavLink to="/admin/user">
          <button disabled type="button" class="btn btn-primary btn-sm btn-block" style={{width:'70%'}}>
            Manage User
          </button>
        </NavLink><br /><br />
        <NavLink to="/admin/role">
          <button type="button" class="btn btn-primary btn-sm btn-block" style={{width:'70%'}}>
            Manage Role
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
        </NavLink><br /><br /><br /><br />
        <NavLink to="/admin">
          <button type="button" class="btn btn-danger btn-sm btn-block" style={{width:'70%'}}>
            Back
          </button>
        </NavLink>
    </div>
    <div style={{width: "100%", paddingTop: "9%", paddingLeft: "5%"}}>
    <h2><b>Welcome back, {adminData.fullname}!</b></h2>
    
    <div style={{width: "120%",display: "flex",  position: "absolute"}}>
        <br />
        <br />

            <table className="table">
                <thead>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Fullname</th>
                    <th>Date of Birth</th>
                    <th>Gender</th>
                    <th>Completion</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                    <th>Role</th>
                    <th>Test</th>
                    <th>
                        Action
                    </th>
                </thead>
                
                <tbody>
                    {data.map(account => (
                        <tr key={account.id}>
                            <td style={{paddingTop:"28px"}}>{account.account_id}</td>
                            <td style={{paddingTop:"28px"}}>{account.email}</td>
                            <td style={{paddingTop:"28px"}}>{account.password}</td>
                            <td style={{paddingTop:"28px"}}>{account.user.fullname}</td>
                            <td style={{paddingTop:"28px"}}>{account.user.dateofbirth}</td>
                            <td style={{paddingTop:"28px"}}>{account.user.gender}</td>
                            <td style={{paddingTop:"28px"}}>{account.user.iscompleted}</td>
                            <td style={{paddingTop:"28px"}}>{account.user.address}</td>
                            <td style={{paddingTop:"28px"}}>{account.user.phonenumber}</td>
                            <td style={{paddingTop:"28px"}}>{account.role.name}</td>
                            <td style={{paddingTop:"28px"}}>{account.user?.test?.name}</td>
                            
                            <td>
                                <button style={{height: "30px", width: "100px"}} class="btn btn-outline-primary btn-sm" onClick={() => handleEdit(account)}>Edit</button>
                                <button style={{height: "30px", width: "100px"}} class="btn btn-outline-danger btn-sm" onClick={() => handleDelete(account.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                <button style={{height: "30px", width: "100px"}} class="btn btn-outline-success btn-sm" onClick={handleShow}>CREATE</button>
                </tbody>
                {/* <tbody>
                    {user.map(user => (
                        <tr key={user.id}>
                            <td>{user.fullname}</td>
                            <td>{user.dateofbirth}</td>
                            <td>{user.gender}</td>
                            <td>{user.iscompleted}</td>
                            <td>{user.address}</td>
                            <td>{user.phonenumber}</td>
                            <td>{account?.role?.name}</td>
                            <td>{user.test.name}</td>
                            
                            <td>
                                <button onClick={() => handleEdit(user)}>Edit</button> | 
                                <button onClick={() => handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody> */}
            </table>
            </div>
        </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {editData ? "Edit User" : "Create User"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div hidden>
                        <input
                            placeholder='ID'
                            value={id}
                            type="id"
                            id="id"
                            name="id"
                            onChange={(e) => setId(e.target.value)}
                        />
                    </div><br />
                    <div>
                        <input
                            placeholder='Email'
                            value={email}
                            type="email"
                            id="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div><br />
                    <div>
                        <input
                            placeholder='Password'
                            value={password}
                            type="password"
                            id="password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div><br />
                    <div>
                        <input
                            placeholder='Fullname'
                            value={fullname}
                            type="text"
                            id="fullname"
                            name="fullname"
                            onChange={(e) => setFullname(e.target.value)}
                        />
                    </div><br /><br />
                    <div>
                        <label htmlFor="dateOfBirth">Date of Birth :</label>
                        <br />
                        <input
                            value={dateofbirth}
                            type="date"
                            id="dateofbirth"
                            name="dateofbirth"
                            onChange={(e) => {
                                const selectedDate = new Date(e.target.value);
                                const formattedDate = `${selectedDate.getFullYear()}-${(selectedDate.getMonth() + 1)
                                    .toString()
                                    .padStart(2, '0')}-${selectedDate.getDate().toString().padStart(2, '0')}`;
                                setDateOfBirth(formattedDate);
                            }}
                        />
                    </div><br /><br />
                    {/* <div>
                    <label htmlFor="dateOfBirth">Date of Birth :</label>
                    <DatePicker
                        type="date"
                        value={dateofbirth}
                        dateFormat="yyyy-MM-dd"
                        onChange={(e) => setDateOfBirth(e.target.value)}
                        />
                        </div> */}
                    <div>
                        <input
                            placeholder='Gender'
                            value={gender}
                            type="text"
                            id="gender"
                            name="gender"
                            onChange={(e) => setGender(e.target.value)}
                        />
                        {/* <select
                            value={gender}
                            id="gender"
                            name="gender"
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select> */}
                    </div><br />
                    <div>
                    <label htmlFor="iscompleted">Completion </label>
                        <input
                            type="checkbox"
                            checked={iscompleted}
                            id="iscompleted"
                            name="iscompleted"
                            onChange={(e) => setIsCompleted(e.target.checked)}
                        />
                    </div><br />
                    <div>
                        <input
                            placeholder='Address'
                            value={address}
                            type="text"
                            id="address"
                            name="address"
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div><br />
                    <div>
                        <input
                            placeholder='Phone Number'
                            value={phonenumber}
                            type="text"
                            id="phonenumber"
                            name="phonenumber"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div><br />
                    {/* <div>
                        <label htmlFor="role">Role :</label>
                        <input
                            value={role.role_id}
                            type="text"
                            id="role"
                            name="role"
                            onChange={(e) => setRoleID(e.target.value)}
                        />
                    </div> */}
                    <div>
                    <select
                            value={role_id}
                            id="role_id"
                            name="role_id"
                            onChange={(e) => setRoleID(e.target.value)}
                        >
                            {role.map(x => (
                                <option key={x.role_id} value={x.role_id}>{x.name}</option>
                            ))}
                            
                            
                        </select>
                        </div><br />
                        <div>
                        <select
                            value={test_id}
                            id="test_id"
                            name="test_id"
                            onChange={(e) => setTestID(e.target.value)}
                        >
                            {test.map(x => (
                                <option key={x.test_id} value={x.test_id}>{x.name}</option>
                            ))}
                            
                            
                        </select>
                        </div>
                        
                        


                        
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={onSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
        </>
    );
};

export default User;