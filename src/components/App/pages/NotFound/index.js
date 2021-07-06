import { useTranslation } from "react-i18next"
import StyledLink from '../../Navigation/StyledLink'
const NotFound = () => {
    const {t} = useTranslation ()
    return (
        <div className="mt-5 d-flex flex-row align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        <span className="display-1 d-block">404</span>
                        <div className="mb-4 lead">{t("notfound:The page you are looking for was not found.")}</div>
                        <StyledLink to={{name : "Home"}}>
                            {t("notfound:Back to Home")}
                        </StyledLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound