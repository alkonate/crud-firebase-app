import { useCallback, useState } from "react"
import StoreContext from "../StoreContext"
const StoreProvider = ({children}) => {

    const [showNewStoreModal, setShowNewStoreModal] = useState(false)
    const [showUpdateStoreModal, setShowUpdateStoreModal] = useState(false)
    const [showDeleteStoreModal, setShowDeleteStoreModal] = useState(false)
    const [storeSelectedId, setStoreSelectedId] = useState(null)

    const toggleNewStoreModal = useCallback(
        () => {
            setStoreSelectedId(null)
            setShowNewStoreModal(!showNewStoreModal)
        },
        [setShowNewStoreModal,showNewStoreModal],
    )

    const toggleUpdateStoreModal = useCallback(
        (e) => {
            if (!showUpdateStoreModal) {setStoreSelectedId(e.target.getAttribute('storeid'))}
            setShowUpdateStoreModal(!showUpdateStoreModal) 
        },
        [setShowUpdateStoreModal,showUpdateStoreModal],
    )
    
    const toggleDeleteStoreModal = useCallback(
        (e) => {
            if (!showDeleteStoreModal) {setStoreSelectedId(e.target.getAttribute('storeid'))}
            setShowDeleteStoreModal(!showDeleteStoreModal) 
        },
        [setShowDeleteStoreModal,showDeleteStoreModal],
    )

    return (
        <StoreContext.Provider value={{
                createStore : {
                    showNewStoreModal,
                    toggleNewStoreModal
                },
                updateStore : {
                    showUpdateStoreModal,
                    toggleUpdateStoreModal
                },
                deleteStore : {
                    showDeleteStoreModal,
                    toggleDeleteStoreModal
                },
                storeSelectedId
            }}>

            {children}

        </StoreContext.Provider>
    )

}

export default StoreProvider