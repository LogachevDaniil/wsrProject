//bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from "react";

import {useState} from "react";
import RequestService from "../services/RequestService";

const AddAdmin = () =>{
    const [ newAddress, setNewAddress] = useState("");
    const [ address, setAddress] = useState("");

    const formAddAdminSubmitHandler = async (e) => {
        e.preventDefault();
        await RequestService.AddAdmin(newAddress, address);
    }

    return(
        <div>
            <br/>
            <h1>Добавление нового администратора</h1>
            <form onSubmit={formAddAdminSubmitHandler}>
                <Form.Group className="mb-3">
                    <Form.Label>Адресс нового Админа</Form.Label>
                    <Form.Control type="text" value={newAddress} onChange={({ target }) => setNewAddress(target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ваш адресс</Form.Label>
                    <Form.Control type="text" value={address} onChange={({ target }) => setAddress(target.value)}/>
                </Form.Group>


                <Button variant="primary" type="submit">
                    Принять
                </Button>
            </form>
        </div>
    );
}
export default AddAdmin;