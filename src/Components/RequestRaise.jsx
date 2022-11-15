//bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from "react";

import { useState } from "react";
import RequestService from "../services/RequestService";

const RequesRaise = () => {
    const [shopAddress, setShopAddress] = useState("");
    const [address, setAddress] = useState("");

    const formRequesRaiseSubmitHandler = async (e) => {
        e.preventDefault();
        await RequestService.RequesRaise(shopAddress, address);
    }

    return(
        <div>
            <br />
            <h1>Запрос на повышение</h1>
            <form onSubmit={formRequesRaiseSubmitHandler}>
                <Form.Group className="mb-3">
                    <Form.Label>Адрес магазина</Form.Label>
                    <Form.Control type="text" value={shopAddress} onChange={({ target }) => setShopAddress(target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ваш Адрес</Form.Label>
                    <Form.Control type="text" value={address} onChange={({ target }) => setAddress(target.value)}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Принять
                </Button>
            </form>
        </div>
    );
}
export default RequesRaise;
