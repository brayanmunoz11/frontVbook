import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Card } from 'react-bootstrap';
import { helpHttp } from '../helpers/helpHttp';



export default function Register (){

    let api = helpHttp();
    let url = "http://localhost:4000/register";

    const initialForm = {
        nombreUsuario: "",
        apellidoUsuario: "",
        correo: "",
        password: ""
    }


    const [form, setForm] = useState(initialForm);
    
    const [usuario, setUsuario] = useState([]);
    const [loged, setLoged] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit =  (e) =>{

        e.preventDefault();


        if(!form.correo || !form.password || !form.nombreUsuario || !form.apellidoUsuario){
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

        <h2>Register</h2>

        <Card style={{ width: '40rem' }}>


        <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="formBasic">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Nombre" name= "nombreUsuario" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasic">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" placeholder="Apellido" name= "apellidoUsuario" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name= "correo" onChange={handleChange} />
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