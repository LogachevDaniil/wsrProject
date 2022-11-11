//bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from "react";

import { useState } from "react";
import RequestService from "../services/RequestService";

const DeleteShop = () => {
    const [shopAddress, setShopAddress] = useState("");
    const [address, setAddress] = useState("");

    const formDeleteShopSubmithandler = async (e) => {
        e.preventDefault();
        await RequestService.DeleteShop(shopAddress, address);
    }
    return (
        <div>
            <br />
            <h1>Удалене магазина</h1>
            <form onSubmit={formDeleteShopSubmithandler}>
                <Form.Group className="mb-3">
                    <Form.Label>Адресс удаляемого магазина</Form.Label>
                    <Form.Control type="text" value={shopAddress} onChange={({ target }) => setShopAddress(target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>ваш админа</Form.Label>
                    <Form.Control type="text" value={address} onChange={({ target }) => setAddress(target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Принять
                </Button>
            </form>
        </div>
    );
}
export default DeleteShop;