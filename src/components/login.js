import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Card } from 'react-bootstrap';
import { helpHttp } from '../helpers/helpHttp';



export default function Login (){

    let api = helpHttp();
    let url = "http://localhost:4000/login";

    const initialForm = {
        correo: "",
        password: ""
    }


    const [form, setForm] = useState(initialForm);
    
    const [usuario, setUsuario] = useState([]);
    const [loged, setLoged] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit =  (e) =>{

        e.preventDefault();


        if(!form.correo || !form.password){
            alert("Datos incompletos");
            return;
        }

        let options = {
            body: form, 
            headers:{ "content-type": "application/json"
        }};

        api.post(url,options).then((res)=> {
            console.log(res);
            if(!res.err){
                setUsuario(res);
                setLoged(true);
            }else{
                setError(res)
            }
        });




        

    }

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        }
        );
    }


    return(
        <>

        <h2>Login</h2>

        <Card style={{ width: '40rem' }}>


        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name= "correo" onChange={handleChange} />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
        </Card>

        </>
    )
}