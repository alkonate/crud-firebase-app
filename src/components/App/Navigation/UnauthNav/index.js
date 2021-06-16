import { Nav,Navbar } from "react-bootstrap";
import StyledLink from "../StyledLink";
import { useTranslation } from "react-i18next";

export default function UnauthNav () {
    const { t } = useTranslation()
    return (
            <Navbar bg="light" variant="light" className="p-2 mb-2" > 
                    <Navbar.Brand className="text-primary m-1">Bakel!<span className="text-secondary">Shop</span></Navbar.Brand>
                    {/* <Navbar.Toggle /> */}
                    {/* <Navbar.Collapse className="justify-content-end"> */}
                    <Nav>
                        <Nav.Item>
                            <StyledLink to={{name : "Signin"}}> {t("Sign in")} </StyledLink>
                        </Nav.Item>
                        <Nav.Item>
                            <StyledLink to={{name : "Signup"}} > {t("Sign up")} </StyledLink>
                        </Nav.Item>
                    </Nav>
                    {/* </Navbar.Collapse> */}
        </Navbar>
    )
}