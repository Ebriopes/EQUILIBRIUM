import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { 
    Card, CardHeader, CardBody, Button, Container,
} from 'reactstrap';
import axios from 'axios';

const Login = () => {
    const [newUser, setNewUser] = useState({
        nombre: '',
        cuenta: 0
    });
    const [userId, setUserId] = useState("null");
    const [auth, setAuth]     = useState(false);
    //const history = useHistory();
    const handleChange = (event) => {
        switch (event.target.id) {
            case 'nombre':
                setNewUser({
                    ...newUser,
                    nombre: event.target.value
                });
                break;
            case 'cuenta':
                setNewUser({
                    ...newUser,
                    cuenta: event.target.value
                });
                break;
            default:
            }
        }
        const createUser = () => {
            if (newUser.nombre.length > 0 &&
                newUser.cuenta >= 0) {
                    axios.post('https://equlibrium-pfinal.firebaseio.com/users.json', newUser)
                    .then(({ data }) => {
                        window.sessionStorage.setItem('id', data.name)
                        setUserId(data.name)
                    })
                } else {
            alert('No has llenado correctamente los campos')
            }
        }
    useEffect(()=> {
                axios.get(`https://equlibrium-pfinal.firebaseio.com/users/${userId}.json`)
                .then(({data})=>{data !== null ? setAuth(true) : console.log(data)} ) 
            },[userId])
    return (
        <>
            {auth ? <Redirect to="/Home"/> :
            <>
            <Container className='d-flex justify-content-center'>
                <Card style={{marginTop: "5%"}}>
                    <CardHeader className="text-center">REGISTRO</CardHeader>
                    <CardBody>
                        <label className="pr-3" htmlFor='nombre'>NOMBRE</label>
                        <input type='text' name='nombre' id='nombre' value={newUser.nombre} onChange={handleChange} />
                        <label className="pl-4 pr-3">CUENTA</label>
                        <input type='number' name='cuenta' id='cuenta' value={newUser.cuenta} onChange={handleChange} style={{minWidth : "50px",maxWidth: "20%"}}/>
                    </CardBody>
                    <Button color="danger" onClick={createUser} className="ml-3 mb-2 mr-3"> Crear usuario</Button>
                </Card>
            </Container>
            </>
            }
        </>
    );
}

export default Login;