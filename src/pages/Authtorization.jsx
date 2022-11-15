//bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import React from "react";
import { useState } from "react";
import RequestService from "../services/RequestService";
import { ProviderContext } from "../Context/ProviderContext";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ShopsTable from '../Components/ShopsTable';

const Authtorization = () => {

    const { Authtorization, SellersDetails, ShopsiMass } = useContext(ProviderContext);
    const navigate = useNavigate();

    const [pass, setPass] = useState("");
    const [login, setLogin] = useState("");
    const [address, setAddress] = useState("");



    const formAuthtorizationSubmitHandler = async (e) => {
        e.preventDefault();

        let data = await RequestService.authAcc(login, pass, address);
        Authtorization(data.login, data.fullName, data.wallet, data.balance, data.role, data.tempRole);
        

        console.log(data);

        if (data.role === "2") {
            let dataSeller = await RequestService.sellersDetails(address);
            SellersDetails(dataSeller.sity, dataSeller.Shop);
            console.log(dataSeller);
        }
        else if (data.role === "5") {
            <ShopsTable />
        }
        

        navigate("/HelloPage");

    }

    return (
        <div>
            <h1>Авторизация</h1>
            <form onSubmit={formAuthtorizationSubmitHandler}>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Логин</Form.Label>
                    <Form.Control type="text" value={login} onChange={({ target }) => setLogin(target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="text"value={pass} onChange={({ target }) => setPass(target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Адрес</Form.Label>
                    <Form.Control type="text" value={address} onChange={({ target }) => setAddress(target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Принять
                </Button>
            </form>
        </div>
    )
}
export default Authtorization;