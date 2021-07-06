import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons"
import { useTranslation } from "react-i18next"
const EmptyStore = () => {

    const {t} = useTranslation()

    return (
        <div className="rounded">
            <div>
                <FontAwesomeIcon size="6x" icon={faFolderOpen} />
            </div>
            <div className="text-secondary display-4 text-center">
                {
                    t("store:No store found")
                }
            </div>
        </div>
    )
}

export default EmptyStore