import axios from "axios"
import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Swal from "sweetalert2";


import "bootstrap/dist/css/bootstrap.min.css"



let User = () => {
    const [data, setData] = useState([{}])
    const [id, setId] = useState(0)
    const [fullname, setFullName] = useState("")
    const [status, setStatus] = useState(false)
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    useEffect(() => {
        axios({
            method: "GET",
            url: "http://localhost:8089/api/user"
        }).then((response) => {
            setData(response.data.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [status])


    const onSubmit = () => {
        handleClose();

        let data = {
            "user_id": id,
            "fullname": fullname
        }

        axios({
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            url: "http://localhost:8089/api/user",
            data: JSON.stringify(data)
        }).then((response) => {
            if(response.data.status === 200){
                setStatus(true)
            }
        }).catch((error) => {
            console.log(error)
        }).finally(() => {
            setStatus(false)
        })

        
    }

    const edit = (x) => {
        setId(x.user_id);
        setFullName(x.fullname);
        handleShow();
      }

    const remove = (id) => {
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
                  url: "http://localhost:8089/api/user/"+ id,
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
      }



    return (

        <div>
            <button onClick={handleShow}>CREATE</button>
            <table classFullName="table">
                <thead>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>ACTION</th>
                </thead>
                <tbody>
                    {data.map(x => {
                        return (
                            <tr key={x.user_id}>
                                <td>{x.user_id}</td>
                                <td>{x.fullname}</td>
                                <td><button onClick={() => edit(x)}>Edit</button> | <button onClick={() => remove(x.user_id)}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <Form>
                    <Form.Group classFullName="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>ID</Form.Label>
                        <Form.Control
                            type="id"
                            placeholder="ID"
                            value={id}
                            onChange={e => setId(e.target.value)}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group classFullName="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>FullName</Form.Label>
                        <Form.Control
                            type="fullname"
                            placeholder="FullName"
                            autoFocus
                        />
                    </Form.Group>
                </Form> */}
                <input type="text" id="user_id" value={id} placeholder="id" onChange={e => setId(e.target.value)}></input>
                <input type="text" id="fullname" value={fullname} placeholder="fullname" onChange={e => setFullName(e.target.value)}></input>
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

    )
}


// let data = [
//     {
//         "id": 1,
//         "fullname": "Kanto"
//     },
//     {
//         "id": 2,
//         "fullname": "Johto"
//     }
// ]





export default User;