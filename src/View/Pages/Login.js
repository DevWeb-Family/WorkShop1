import React,{ useState } from "react";
import {Form,Button,Container,Card,Row,Col,Image,Alert} from 'react-bootstrap';
import '../../Asset/stlye.css'
import axios from 'axios'
import {Redirect  } from "react-router-dom";

const Login = () => {
    const [alertmsg, setAlertmsg] = useState("");
    const [show, setShow] = useState(false);
    const [input, setInput] = useState({
        email: '',
        password: '',
       tream : false
      });

      const handleChange = e => {
        const { target } = e
        const { name } = target
        const value = name  === 'tream' ? target.checked : target.value;
       
       setInput({
          ...input,
          [name]: value
        })
        
      }

    const onSubmit = e => {
        e.preventDefault()
        console.log('submit value', input)
        
            //axios.defaults.withCredentials = false;
           const json = { ...input };
            axios.post('https://polar-ravine-60384.herokuapp.com/login', json, {
            headers: {
                // Overwrite Axios's automatically set Content-Type
                'Content-Type': 'application/json'
            }
            }).then(response => {
                console.log("response: ", response.data);
                if(window.sessionStorage.setItem("token", response.data.token,(24*60*60)*1000)==true){
                    redirect();
                }
                // do something about response
            }).catch(err => {
                //console.error(err)
                if (err.response) {
                    console.log(err.response.data.Error);
                   setAlertmsg(err.response.data.Error);   
                   setShow(true)               
                    //console.log(err.response.status);
                   // console.log(err.response.headers);
                  }
            });
    }
    const redirect = () => {
        if (window.sessionStorage.getItem("token") !== null) {
          return <Redirect to="/index" />;
        }
      };
    return(
       
        <Container>
          <Image src="logo192.png" rounded  className="ImageLogin" style={{ width:"10rem"}}/>
          <Card  className="CardLogin" style={{ width:"25rem"  }} >
            <Card.Title className="text-center" style={{ marginTop:"15px" }}>ลงชื่อเข้าใช้งานระบบ</Card.Title>
            <Card.Body >    
            <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange}/>
            </Form.Group>
            <Row className="g-2">
            <Col md className="mb-3">
                <Form.Check type="checkbox" label="Remember"  name="tream" onChange={handleChange}/>
            </Col>
            <Col md className="mb-3">
            <Card.Link href="#" style={{ float:"right" }}>Reset Password?</Card.Link>
            </Col>
            </Row>
            <Row className="g-2"> 
            <Button variant="primary" type="submit" size="lg" >
                Login
            </Button>
            </Row>
            <Row className="g-2">
            <Col md className="mb-3"><br></br>
            <Alert show={show} key="danger" variant="danger" onClose={() => setShow(false)} dismissible>{alertmsg}</Alert>
            </Col>
            </Row>            
            </Form>
            </Card.Body>
            </Card>
            {redirect()}
            </Container>
)
       
}
export default Login;