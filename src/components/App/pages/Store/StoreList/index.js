import { useCallback, useEffect, useMemo, useState } from "react"
import TimeoutSpinner from "../../../../TimeoutSpinner"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { composeHoc, getUserFromSessionStorage } from "../../../../../helpers"
import WithDatabaseService from "../../../../Database/WithDatabaseService"
import WithStore from "../StoreConsumer"
import StoreItem from "../StoreItem"
import EmptyStore from "../EmptyStore"
import { Button } from "react-bootstrap"

const StoreList = ({database,createStore,updateStore,deleteStore}) => {
    const [stores, setStores] = useState(null)
    const [loading, setLoading] = useState(true)
    const uid = useMemo(() => getUserFromSessionStorage().uid, [])
   const { toggleNewStoreModal } = createStore
   const { toggleUpdateStoreModal } = updateStore
   const { toggleDeleteStoreModal } = deleteStore

    useEffect( () => {
        // child added
        database.getNodeRef(`stores/${uid}`).on("child_added",(snapshot) => {
            setStores(stores => {
                return {
                    ...stores,
                    [snapshot.key] : {
                        ...snapshot.val(),
                        created : true
                    }
                }
            })
        })
        // child changed
        database.getNodeRef(`stores/${uid}`).on('child_changed', (snapshot) => {
            setStores(stores => {
                return {
                    ...stores,
                    [snapshot.key] : {
                        ...snapshot.val(),
                        updated : true
                    }
                }
            })
        });
        // child remove
        database.getNodeRef(`stores/${uid}`).on('child_removed', (snapshot) => {
            setStores( stores => {
                const updateStores = Object.keys(stores)
                    .filter(key => key !== snapshot.key)
                        .reduce((updateStores,key) => {
                            updateStores[key] = stores[key]
                            return updateStores
                        },{})
                console.log(updateStores, snapshot.key)
                return updateStores
            })
        });
        // clean everything before leaving
        return () => {
            // remove all event listener at user stores ref
            database.getNodeRef(`stores/${uid}`).off()
        }
    }, [database,uid])

    return (
        <div className="container mt-5 mb-5">
            <div className="d-flex justify-content-center row">
                <div className="col-md-10">
                <Button className="mb-4" onClick={toggleNewStoreModal} >
                    <FontAwesomeIcon icon={faPlus} />
                </Button>
                    {
                        stores 
                                ?   Object.keys(stores).map(key => <StoreItem key={key} storeid={key} store={stores[key]} toggleDeleteStoreModal={toggleDeleteStoreModal} toggleUpdateStoreModal={toggleUpdateStoreModal} />)
                                : loading  
                                    ? <TimeoutSpinner setLoading={setLoading} timeout={10000} animation="border" variant="primary" />
                                    : <EmptyStore />
                    }
                </div>
            </div>
        </div>
    )
}

export default composeHoc(WithDatabaseService,WithStore)(StoreList)

