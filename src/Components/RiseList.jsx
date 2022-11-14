//bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from "react"
import { useState } from "react";
import RequestService from "../services/RequestService";
import Table from 'react-bootstrap/Table';
import { useEffect } from "react";

const RiseList = ({ address }) => {

    const [List, setList] = useState([])
    useEffect(() => {
        (async () => {
            const List = await RequestService.riseList(address)
            setList(List)
        })()
    }, [address])

    const [bool, setBool] = useState("")
    const [confirmId, setId] = useState("")

    const formRejectSubmitHandler = async (e) => {
        e.preventDefault();
        await RequestService.addSellers(false, confirmId, address);
    }
    const formAcceptSubmitHandler = async (e) => {
        e.preventDefault();
        await RequestService.addSellers(true, confirmId, address);

    }

    return (
        <div>
            <Table striped>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Город</th>
                        <th>Адресс кошелька</th>
                        <th>многа деняк</th>
                    </tr>
                </thead>
                <tbody>
                    {List?.map(({ id, seller, shop }, idx) => (
                        <tr key={idx}>
                            <th>{id}</th>
                            <td>{seller}</td>
                            <td>{shop}</td>
                        </tr>

                    ))}
                </tbody>
            </Table>
            <form>
                <Form.Group className="mb-3">
                    <Form.Label>ID пользователя</Form.Label>
                    <Form.Control type="text" value={confirmId} onChange={({ target }) => setId(target.value)} />
                </Form.Group>
                <Button variant="success" type="submit" onClick={formAcceptSubmitHandler}>Принять</Button>{' '}
                <Button variant="danger" type="submit" onClick={formRejectSubmitHandler}>Отклонить</Button>{' '}
            </form>
        </div>
    );
}
export default RiseList;
