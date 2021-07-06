import {Card, Col, Container, Row} from "react-bootstrap"
import { useTranslation } from "react-i18next"
import SignUpForm from './SignUpForm'
const SignUp = (props) => {
  const { t } = useTranslation () 
   return (
       <Container>
          <Row className="justify-content-center">
              <Col lg="8">
                <Card>
                <Card.Header>{t("signup:card.title")}</Card.Header>
                <Card.Body>
                        <SignUpForm />       
                </Card.Body>
                </Card>
              </Col>
          </Row>
       </Container>
   )
}

export default SignUp