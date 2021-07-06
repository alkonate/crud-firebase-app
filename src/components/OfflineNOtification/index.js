import { Trans } from "react-i18next"
const OfflineNotification = () => {
    return (
        <div className="alert bg-danger text-white text-center">
                <Trans i18nKey="offlineNotification">
                            Your are currently <span className="text-dark">offline</span>
                </Trans>
        </div>
    )
}

export default OfflineNotification