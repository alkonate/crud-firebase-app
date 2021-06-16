import { Container, Row, Col, Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import StyledLink from "./StyledLink";
import { withFirebase } from "../../Firebase";
const Navigation = ({firebase}) => {
    const { t } = useTranslation()
    const { doSignOut } = firebase
    return (
            <Navbar bg="light" expand="lg" variant="light" className="shadow" >
                <Navbar.Brand className="text-primary m-1">Bakel!<span className="text-secondary">Shop</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Container>
                    <Row>
                        <Col>
                            <Nav className="mr-auto my-2 my-lg-0" navbarScroll>
                                {/* <StyledLink to={ROUTES.LANDING}>Landing</StyledLink> */}
                                <StyledLink to={{name : 'Home'}}>{t("navigation:Home")}</StyledLink>
                                <StyledLink  to={{name : 'Product'}}>{t("navigation:Product")}</StyledLink>
                                <Button variant="danger" onClick={doSignOut} >{t("navigation:Sign out")}</Button>
                            </Nav>
                        </Col>
                        <Col>
                            <Form inline className="d-flex">
                                <FormControl type="text" placeholder={t("navigation:Search.placeholder")} className="mr-sm-2" />
                                <Button variant="outline-success">{t("navigation:Search.button")}</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>  
                </Navbar.Collapse>
        </Navbar>
    )
}

export default withFirebase(Navigation)