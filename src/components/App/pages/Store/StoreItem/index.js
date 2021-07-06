import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStore } from "@fortawesome/free-solid-svg-icons"
import styles from './storeItem.module.css'
import { useTranslation } from "react-i18next"

const StoreItem = ({storeid,store,toggleUpdateStoreModal,toggleDeleteStoreModal}) => {

    const { t } = useTranslation()

    return (
        <div className={`row p-2  border rounded ${store.updated ? 'bg-light border-success' : store.created ? 'bg-light border-primary' : 'bg-white' }`}>
                    <div className="col-md-3 bg-secondary d-flex align-items-center justify-content-center">
                        <span><FontAwesomeIcon icon={faStore} className={styles.storeIcon}/></span>
                    </div>
                    <div className="col-md-6 mt-1">
                        <h5 className="text-primary">{store.name}</h5>
                        <h5>{t("store:item.Description")}</h5>
                        <div className={`d-flex flex-row`}>
                            <div className={styles.description}>
                                {store.description}
                            </div>
                        </div>
                        <div className="text-secondary">{t("store:item.Address")} : {store.address} </div>
                        <div className="text-secondary">{t("store:item.Telephone")} : {store.telephone} </div>
                    </div>
                    <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                        <div className="d-flex flex-column mt-4">
                            <button className="btn btn-primary btn-sm" type="button" storeid={storeid} onClick={toggleUpdateStoreModal}>{t("store:item.Update")}</button>
                            <button className="btn btn-outline-danger btn-sm mt-2" type="button" storeid={storeid} onClick={toggleDeleteStoreModal}>{t("store:item.Delete")}</button>
                            </div>
                    </div>
                </div>
    )
}

export default StoreItem