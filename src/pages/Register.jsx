//bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from "react";

import RequestService from "../services/RequestService";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => { //функциональный компанент (должен называться как файл)
    const navigate = useNavigate();

    const [_address, setAddress] = useState("");
    const [_login, setLogin] = useState("");
    const [_pass, setPass] = useState("");
    const [_fullName, setFullName] = useState("");


    const formRegSubmitHandler = async (e) => {
        e.preventDefault();
        await RequestService.register(_fullName, _login, _pass, _address);
        navigate("/Authtorization")
    }

    return (
        <div>
            <h1>Регистрация</h1>
            <form onSubmit={formRegSubmitHandler}>
                <Form.Group className="mb-3" >
                    <Form.Label>логин</Form.Label>
                    <Form.Control type="text" value={_login} onChange={({ target }) => setLogin(target.value)} /* name='login' id='login'*/ />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>полное имя</Form.Label>
                    <Form.Control type="text" value={_fullName} onChange={({ target }) => setFullName(target.value)}/*name='fullName' id='fullName' */ />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>пароль</Form.Label>
                    <Form.Control type="text" value={_pass} onChange={({ target }) => setPass(target.value)}/*name='pass' id='pass'*/ />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>адресс</Form.Label>
                    <Form.Control type="text" value={_address} onChange={({ target }) => setAddress(target.value)}/*name='address' id='address' */ />
                </Form.Group>

                <Button variant="primary" type="submit">
                    принять
                </Button>
            </form>
        </div>
    );
}
export default Register;


{/* <Modal show={isShowModal} onHide={() => setIsShowModal(false)}> */ }
{/* <Modal.Header closeButton> */ }
// <Modal.Title>Secret Word</Modal.Title>
// </Modal.Header>
{/* <Modal.Body>Enter ur secret word!</Modal.Body> */ }
{/* <Form.Group className="mb-3" controlId="formBasicPassword"> */ }
// <Form.Control type="text" placeholder="Word" /*name='address' id='address' */ />
// </Form.Group>
{/* <Modal.Footer> */ }
// <Button variant="primary" onClick={formRegSubmitHandler}>
{/* Submit */ }
{/* </Button> */ }
{/* </Modal.Footer> */ }
{/* </Modal> */ }
