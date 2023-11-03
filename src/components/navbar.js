import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import {SlNotebook} from 'react-icons/sl'
import { 
  Nav, 
  Navbar,
  Container
} from 'react-bootstrap';

const Navbars = () => {
  const { isAuth } = useSelector((state) => state.auth)

  return (
    <Navbar bg='secondary' data-bs-theme="light">
      <div className='container'>
        <div>
          <NavLink to='/'>
            <span className='navbar-brand mb-0 h1 text-light'>My Note</span>
          </NavLink>
        </div>

        {isAuth ? (
          <div>
            <NavLink to='/dashboard' className='mx-3'>
              <span>Dashboard</span>
            </NavLink>
          </div>
        ) : (
          <div>
            <NavLink to='/login'>
              <span className='text-light'>Login</span>
            </NavLink>

            {/* <NavLink to='/register' className='mx-3'>
              <span>Register</span>
            </NavLink> */}
          </div>
        )}
      </div>
    </Navbar>

    // <>
    //   <header>
    //   <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
    //   <Container>
    //     <SlNotebook size="25px" color="white"/>
    //     <Navbar.Brand href="/">My Note !</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto text-light">
    //         <Nav.Link href="Addnote">Add Note
    //         </Nav.Link>
           
    //       </Nav>

    //     </Navbar.Collapse>
    //   </Container>
    //   </Navbar>
    //  </header>
    // </>
  )
}

export default Navbars
