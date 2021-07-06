import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom'
import { useCallback, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { composeHoc, getError } from "../../../../../helpers";
import FormError from "../../../../FormError";
import {withAuth} from '../../../../Authentication'
import {authLoadingAction} from '../../../../Authentication/authActions'
import WithAuthService from '../../../../Authentication/AuthService/WithAuthService';
import WithDatabaseService from '../../../../Database/WithDatabaseService';
const initialState = {
    username : "",
    email : "",
    firstpassword : "",
    secondepassword : "",
}

const SignUpForm = ({auth, database, dispatch, loading}) => {
   
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
                // check if the username exist
                await auth.usernameDoesNotExist(database,data.username)
                // create user auth email and pwd
                await auth.doCreateUserWithEmailAndPassword(data.email,data.firstpassword)
                // update user auth profil
                await auth.doUpdateUserProfil({
                    displayName : data.username,
                    photoURL: null
                })
                // add username at usernames ref 
                // & add user at  users ref 
                database.updateNode(database.getNodeRef(),{
                    [`usernames/${auth.doGetCurrentUserUid()}`] : data.username,
                    [`users/${auth.doGetCurrentUserUid()}`] : {
                                                                username: data.username,
                                                                email : data.email,
                                                                created_at: database.TIMESTAMP,
                                                                updated_at: database.TIMESTAMP
                                                            }
                })
                
            } catch (e) {
                setError(getError(e))
            }finally {
                dispatch(authLoadingAction(false))
            }
        },
        [auth,database,data,dispatch],
    )

    return (
        <>
        <FormError error={error} />
        <Form onSubmit={onSubmitHandler}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>{t("signup:username.label")}</Form.Label>
                <Form.Control type="text" onChange={onchangeHandler} name="username" value={data.username} placeholder={t("signup:username.placeholder")} />
                <Form.Text className="text-muted">
                    {t("signup:username.muted-text")}
                </Form.Text>
            </Form.Group>
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
            
            <Button variant="primary" type="submit" disabled={(loading || data.username === '' || data.email === '' || data.firstpassword ==='' || data.secondepassword === '' || data.secondepassword !== data.firstpassword )}>
                {t("signup:button.label.signUp")}
            </Button>
        </Form>
        </>
    )
}

// props validation
SignUpForm.propTypes = {
    auth : PropTypes.object.isRequired, 
    dispatch : PropTypes.func.isRequired, 
    loading : PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired
}

export default composeHoc(
                            WithAuthService,
                            WithDatabaseService,
                            withAuth,
                            withRouter
                                )(SignUpForm)
