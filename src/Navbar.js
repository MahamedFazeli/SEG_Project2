import "./Navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const navbar = () => {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    return (
        <Navbar expand="lg" className="Navbar">
          <Container fluid>
            <img src="filesource" alt="Court KINGS image" />
            <Navbar.Brand href="#home" id="Title">COURT KINGS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
              <NavDropdown title="Events" id="tabs" className="navtab">
                  <NavDropdown.Item href="#action/3.1" id="innertabs">Tournaments</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4" id="innertabs">
                    Open Court
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Resources" id="tabs" className="navtab">
                  <NavDropdown.Item href="#action/3.1" id="innertabs">Training Videos</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4" id="innertabs">
                    Training Sessions
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#chat" id="tabs" className="navtab">Chat</Nav.Link>
                <Nav.Link href="#home" id="tabs" className="navtab">Register</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
 
export default navbar;