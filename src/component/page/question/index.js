import axios from 'axios'
import { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css"
import Swal from "sweetalert2";

let Test = () => {
    const [ data, setData ] = useState([{}])
    const [ show, setShow ] = useState(false)
    const [ question_id, setquestion_id ] = useState(0)
    const [ questionDetail, setQuestionDetail ] = useState("")
    const [ correctAnswer, setCorrectAnswer ] = useState("")
    const [ image, setImage ] = useState("")
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [ status, setStatus ] = useState(false);
    const [editData, setEditData] = useState(null);

    useEffect(() => {
        axios({
            method: "GET",
            url: "TODO"
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
            "question_id" : question_id,
            "questionDetail": questionDetail,
            "correctAnswer": correctAnswer,
            "image": image
        }
        axios({
            method: editData ? "POST" : "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            url: "WIP",
            data: JSON.stringify(requestData)
          }).then((response) => {
            if (response.data.status === 200) {
              setStatus(true);
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
                url: "WIP",
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
        setQuestionDetail(rowData.questionDetail);
        setCorrectAnswer(rowData.correctAnswer);
        setImage(rowData.image);
        handleShow();
      }

    return (
        //TODO
        < ></>
    )
}

export default question;