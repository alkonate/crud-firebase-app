import { Alert } from "react-bootstrap";
import {useTranslation} from 'react-i18next'
export default function FormError ({error}) {
    const {t} = useTranslation()
    return (
        error && 
            <Alert variant="danger">
                {
                    t("authValidation:"+error.code)
                }
            </Alert>
    )
}

