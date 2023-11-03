import { Outlet } from "react-router-dom";
import "../css/layout.css";
import {SlNotebook } from 'react-icons/sl';
import "bootstrap/dist/css/bootstrap.min.css";
import { 
  Nav,
  Navbar,
  Container,

} from "react-bootstrap";

const Layout = () => {


    return (
      <>

      <header>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <SlNotebook size="25px" color="white"/>
        <Navbar.Brand href="/">My Note !</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Addnote">Add Note
            </Nav.Link>
           
          </Nav>
          </Navbar.Collapse>
      </Container>
      </Navbar>
     </header>
      <Outlet />
    </>
  )
};

export default Layout;