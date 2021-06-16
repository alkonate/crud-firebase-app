import { useTranslation } from "react-i18next"

const NotFound = () => {
    const {t} = useTranslation ()
    return (
        <div className="mt-5 d-flex flex-row align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        <span className="display-1 d-block">404</span>
                        <div className="mb-4 lead">{t("The page you are looking for was not found.")}</div>
                        <a href="/" className="btn btn-link">{t("Back to Home")}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound