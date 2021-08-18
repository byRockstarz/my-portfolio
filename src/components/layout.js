import { Container, Nav, Navbar } from "react-bootstrap";

const Layout = () => {
  return (
    <Navbar sticky="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>My Portfolio</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>Experience</Nav.Link>
          <Nav.Link>Skill</Nav.Link>
          <Nav.Link>About Me</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Layout;
