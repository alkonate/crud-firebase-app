import { Container, Row, Col, Button, Navbar, Dropdown, Form, FormControl } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import WithAuthService from "../../Authentication/AuthService/WithAuthService";
import { useMemo } from "react";
import { withAuth } from "../../Authentication";
const Navigation = ({auth,user}) => {
    const { t } = useTranslation()
    const displayName = useMemo( () => user ? user.displayName : "" ,[user])
    const { doSignOut } = auth
    return (
            <Navbar bg="light" expand="lg" variant="light" className="shadow" >
                <Navbar.Brand className="text-primary m-1">Bakel!<span className="text-secondary">Shop</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Container>
                    <Row>
                        <Col>
                            <Dropdown>
                                <Dropdown.Toggle variant="light" id="dropdown-basic">
                                   {displayName}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={doSignOut}>{t("navigation:Sign out")}</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
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

export default withAuth(WithAuthService(Navigation))