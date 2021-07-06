import NewStoreModal from "./NewStoreModal"
import UpdateStoreModal from "./UpdateStoreModal"
import DeleteStoreModal from "./DeleteStoreModal"
import { useTranslation } from "react-i18next"
import StoreList from "./StoreList"
import StoreProvider from "./StoreProvider"

const Store = () => {
    
    const { t } = useTranslation()
    return (
    
            <div className="container-fluid">
                    <div className="card">
                        <div className="card-header bg-white fs-3 fw-bold">
                            {t('store:Store')}
                        </div>

                        <div className="card-body">
                            <StoreProvider>  
                                <NewStoreModal />
                                <UpdateStoreModal />
                                <DeleteStoreModal />
                                <StoreList />
                            </StoreProvider>
                        </div>
                    </div>
            </div>
        
    )
}

export default Store