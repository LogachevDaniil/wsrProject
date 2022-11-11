import React, { children } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
    return (

        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand ><Link to={"/HelloPage"}>Главная</Link></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link ><Link to={"/Register"} >Регистрация</Link></Nav.Link>
                        <Nav.Link >
                            <Link to={"/Authtorization"}>Авторизация</Link>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            {children}

        </div>

    )
    
}
export default Layout;