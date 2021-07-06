import { useEffect } from "react";
import { Trans } from "react-i18next";
const OnlineNotification = ({dismiss,duration}) => {
    useEffect(() => {
        const timeOut = setTimeout(() => dismiss(), duration);
        return () => {
            clearTimeout(timeOut)
        }
    }, [dismiss,duration])

    return (
        <div className="alert bg-success text-white text-center">
                <Trans i18nKey="onlineNotification">
                     Your are currently <span className="text-primary">online</span>
                </Trans>
        </div>
        )

}

export default OnlineNotification