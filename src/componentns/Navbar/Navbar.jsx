import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function CustomNavbar() {
    return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container>
    
        <Link to='/home' className='me-5'> Go to Home Page</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
        
           
            <Link to='/restaurent' className='me-5'> Restaurent</Link>
            <Link to='/products'> Products</Link>
     
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

