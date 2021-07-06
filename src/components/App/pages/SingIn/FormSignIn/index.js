import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom'
import { useCallback, useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { composeHoc, getError } from "../../../../../helpers";
import FormError from "../../../../FormError";
import WithAuthService from '../../../../Authentication/AuthService/WithAuthService';
import {withAuth} from '../../../../Authentication'
import {authLoadingAction} from '../../../../Authentication/authActions'

const initialState = {
    email : "",
    password : "",
}

const SignInForm = ({auth, dispatch, loading}) => {
    const [error,setError] = useState(null)
    const [data, setData] = useState(initialState)
    
    const {t} = useTranslation ()

    const onchangeHandler = useCallback(
        (e) => {
            setData({
                ...data,
                [e.target.name] : e.target.value
            })
         },
        [data],
    )
        
    const onSubmitHandler = useCallback(
        async (e) => {
            e.preventDefault()
            setError(null)
            dispatch(authLoadingAction(true))
            try {
                await auth.doSignInWithEmailAndPassword(data.email, data.password)
            } catch (e) {
                setError(getError(e))
            }finally {
                dispatch(authLoadingAction(false))
            }
        },
        [auth,data,dispatch],
    )

    // on network failed throw error!!!
    useEffect(() => { 
        if(error && error.code && error.code === "auth/network-request-failed") {
            throw error
        }
    }, [error])

    return (
        <>
        <FormError error={error} />
        <Form onSubmit={onSubmitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>{t("signin:Address Email")}</Form.Label>
                <Form.Control type="email" onChange={onchangeHandler} name="email" autoComplete="email" value={data.email} placeholder={t("signin:example")} />
                <Form.Text className="text-muted">
                    {t("signin:Please enter your address your email address.")}
                </Form.Text>
            </Form.Group>
            <Row className="g-2">
                <Col md>
                    <Form.Group className="mb-3" controlId="secondepassword">
                        <Form.Label>{t("signin:Password")}</Form.Label>
                        <Form.Control type="password" autoComplete="new-password" name="password" onChange={onchangeHandler}  value={data.password} placeholder={t("signin:Enter your password")} />
                        <Form.Text className="text-muted">
                        {t("signin:Please enter your password to log in.")}
                        </Form.Text>
                    </Form.Group>
                </Col>
            </Row>
            
            <Button variant="primary" type="submit" disabled={(loading || data.email === '' || data.password ==='' )}>
                {t("signin:Sign in")}
            </Button>
        </Form>
        </>
    )
}

// props validation
SignInForm.propTypes = {
    auth : PropTypes.object.isRequired, 
    dispatch : PropTypes.func.isRequired, 
    loading : PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired
}

export default composeHoc(
                            WithAuthService,
                            withAuth,
                            withRouter
                                )(SignInForm)
