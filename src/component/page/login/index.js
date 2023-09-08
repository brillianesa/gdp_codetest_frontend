import {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Login() {
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ role, setRole ] = useState([])
    const [ role_id, setRoleID ] = useState(0)
    const navigate = useNavigate();
    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8089/api/account/login", {
            email: email,
            password: password,
            }).then((res) => 
            {
             console.log(res.data);
             
             if (res.data.message == "Email not exist") 
             {
               alert("Email not exist");
             } 
             else if(res.data.message == "Signed in")
             { 
                
                navigate('/home');
             } 
              else 
             { 
                alert("Incorrect Email and Password not match");
             }
          }, fail => {
           console.error(fail);
  });
        }
 
         catch (err) {
          alert(err);
        }
      
      handleLogError(error)
      setIsError(true)
    }
  }

  if (isLoggedIn) {
    return <Navigate to={'/'} />
  }

  return (
    <Grid textAlign='center'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Form size='large' onSubmit={handleSubmit}>
          <Segment>
            <Form.Input
              fluid
              autoFocus
              name='email'
              icon='user'
              iconPosition='left'
              placeholder='Email'
              value={email}
              onChange={handleInputChange}
            />
            <Form.Input
              fluid
              name='password'
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              value={password}
              onChange={handleInputChange}
            />
            <Button color='violet' fluid size='large'>Login</Button>
          </Segment>
        </Form>
        <Message>{`Don't have already an account? `}
          <NavLink to="/signup" color='violet' as={NavLink}>Sign Up</NavLink>
        </Message>
        {isError && <Message negative>The email or password provided are incorrect!</Message>}
      </Grid.Column>
    </Grid>
  )
}

export default Login