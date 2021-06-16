import { useEffect } from "react"
import {Card, Col, Container, Row} from "react-bootstrap"
import { useTranslation } from "react-i18next"
import SignInForm from './FormSignIn'
const SignIn = (props) => {
  
  const { t } = useTranslation () 

  useEffect(() => { 
   
    console.log("singin page mounted")
    return () => {
        console.log("singin page unmouted")
    }
}, [])
   return (
       <Container>
          <Row className="justify-content-center">
              <Col xs="8" lg="6">
                <Card>
                <Card.Header>{t("signin:Sign in")}</Card.Header>
                <Card.Body>
                        <SignInForm />       
                </Card.Body>
                </Card>
              </Col>
          </Row>
       </Container>
   )
}

export default SignIn