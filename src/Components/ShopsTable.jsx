import React from "react"
import {useState} from "react";
import RequestService from "../services/RequestService";
import Table from 'react-bootstrap/Table';
import { useEffect } from "react";

const ShopsTable = ({address}) => {
    
    const [shops, setShops] = useState([])
    useEffect(() => {
        (async () => {
            const allshops = await RequestService.Shopsi(address)
            setShops(allshops)
        })()
    },[address])

    
    return(
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
        {shops?.map(({Id, Sity, wallet, balance}, idx) => (
            <tr key={idx}>
                <th>{Id}</th>
                <td>{Sity}</td>
                <td>{wallet}</td>
                <td>{balance}</td>
            </tr>

        ))}
      </tbody>
    </Table>
    </div>
    );
}
export default ShopsTable;