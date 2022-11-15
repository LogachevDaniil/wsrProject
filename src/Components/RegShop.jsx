//bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from "react";

import {useState} from "react";
import RequestService from "../services/RequestService";

const RegShop = () =>{
    const [sity, setSity] = useState("");
    const [shopAddress, setShopAddress] = useState("");
    const [address,setAdminAddress] = useState("");
    const formRegShopSubmitHandler = async(e) => {
        e.preventDefault();
        await RequestService.RegShop( shopAddress, sity, address);
    }
    return(
        <div>
        <br/>
        <h1>Регистрация нового магазина</h1>
        <form onSubmit={formRegShopSubmitHandler}>
            <Form.Group className="mb-3">
                <Form.Label>город</Form.Label>
                <Form.Control type="text" value={sity} onChange={({ target }) => setSity(target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Адрес будущего магазина</Form.Label>
                <Form.Control type="text" value={shopAddress} onChange={({ target }) => setShopAddress(target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>ваш Адрес</Form.Label>
                <Form.Control type="text" value={address} onChange={({ target }) => setAdminAddress(target.value)}/>
            </Form.Group>


            <Button variant="primary" type="submit">
                Принять
            </Button>
        </form>
    </div>
    );
    
}
export default RegShop;
