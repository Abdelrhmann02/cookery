import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand style={{color: "#FF9800" , fontFamily:'Montserrat', fontSize: 25 }} href="/">Cookery</Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="/ShoppingCart">Shopping Cart</Nav.Link>
            <Nav.Link href="/menu">
               Menu
            </Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;