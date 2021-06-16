import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom'
import * as ROUTES from '../../../../../constants/routes'
import { useCallback, useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { composeHoc, getError } from "../../../../../helpers";
import FormError from "../../../../FormError";
import {withFirebase} from '../../../../Firebase'
import {withAuth} from '../../../../Authentication'
import {authLoadingAction} from '../../../../Authentication/authActions'

const initialState = {
    email : "",
    firstpassword : "",
    secondepassword : "",
}

const SignUpForm = ({firebase, dispatch, loading,history}) => {
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
                await firebase.doCreateUserWithEmailAndPassword(data.email,data.firstpassword)
                history.push(ROUTES.HOME)
            } catch (e) {
                setError(getError(e))
            }finally {
                dispatch(authLoadingAction(false))
            }
        },
        [firebase,data,dispatch,history],
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
                <Form.Label>{t("signup:addressEmail.label")}</Form.Label>
                <Form.Control type="email" onChange={onchangeHandler} name="email" autoComplete="email" value={data.email} placeholder={t("signup:addressEmail.placeholder")} />
                <Form.Text className="text-muted">
                    {t("signup:addressEmail.muted-text")}
                </Form.Text>
            </Form.Group>
            <Row className="g-2">
                <Col md>
                    <Form.Group className="mb-3" controlId="firstpassword">
                        <Form.Label>{t("signup:password.label")}</Form.Label>
                        <Form.Control type="password" autoComplete="new-password" onChange={onchangeHandler}  name="firstpassword"  placeholder={t("signup:password.placeholder")} value={data.firstpassword} />
                        <Form.Text className="text-muted">
                            {t("signup:password.muted-text")}
                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col md>
                    <Form.Group className="mb-3" controlId="secondepassword">
                        <Form.Label>{t("signup:password.label")}</Form.Label>
                        <Form.Control type="password" autoComplete="new-password" onChange={onchangeHandler} isInvalid={(data.secondepassword.length && data.secondepassword !== data.firstpassword) ? true : false } name="secondepassword" value={data.secondepassword} placeholder={t("signup:password.label")} />
                        <Form.Text className="text-muted">
                        {t("signup:password.muted-text")}
                        </Form.Text>
                    </Form.Group>
                </Col>
            </Row>
            
            <Button variant="primary" type="submit" disabled={(loading || data.email === '' || data.firstpassword ==='' || data.secondepassword === '' || data.secondepassword !== data.firstpassword )}>
                {t("signup:button.label.signUp")}
            </Button>
        </Form>
        </>
    )
}

// props validation
SignUpForm.propTypes = {
    firebase : PropTypes.object.isRequired, 
    dispatch : PropTypes.func.isRequired, 
    loading : PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired
}

export default composeHoc(
                            withFirebase,
                            withAuth,
                            withRouter
                                )(SignUpForm)
