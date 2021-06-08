import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import * as ROUTES from '../../constants/routes'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export function Navigation () {
    return (
            <Navbar bg="light" expand="lg" variant="light" className="shadow" >
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Container>
                    <Row>
                        <Col>
                            <Nav className="mr-auto my-2 my-lg-0"
                            navbarScroll>
                                <StyledLink to={ROUTES.LANDING}>Landing</StyledLink>
                                <StyledLink to={ROUTES.HOME}>Home</StyledLink>
                                <StyledLink to={ROUTES.ADMIN}>Admin</StyledLink>
                                <StyledLink to={ROUTES.ACCOUNT}>Account</StyledLink>
                                <StyledLink to={ROUTES.SIGN_IN}>Sign in</StyledLink>
                            </Nav>
                        </Col>
                        <Col>
                            <Form inline className="d-flex">
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>    
                    
                </Navbar.Collapse>
            
        </Navbar>
    )
}
const StyledLink = ({children,...props}) => <Link {...props} className="nav-link">{children}</Link>