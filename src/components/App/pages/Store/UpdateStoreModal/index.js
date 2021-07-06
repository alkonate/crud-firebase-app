import {composeHoc } from './../../../../../helpers'
import { withAuth } from "../../../../Authentication";
import WithStore from "../StoreConsumer";
import withDatabaseService from "./../../../../Database/WithDatabaseService";
import { useCallback, useEffect, useState } from "react";
import StoreModal from "../StoreModal";
import CreateUpdateStoreForm from "../CreateUpdateStoreForm";
import { useTranslation } from "react-i18next";
import TimeoutSpinner from '../../../../TimeoutSpinner';
import { Spinner } from 'react-bootstrap';


const UpdateStoreModal = ({database,user,updateStore,storeSelectedId}) => {
    const { showUpdateStoreModal, toggleUpdateStoreModal } = updateStore
    const [ initialData, setInitialData ] = useState(null)
    const [ loading, setLoading ] = useState(false)
    
    const { t } = useTranslation ()
    
    const handleUpdate = useCallback(
      async (data) => {
         database.updateNode(database.getNodeRef(`stores/${user.uid}/${storeSelectedId}`),data)
      },
      [database,user,storeSelectedId]
    )

    const fetchStoreData = useCallback(
        async (key) => {
            setLoading(true)
            const store = await database.getNodeRef(`stores/${user.uid}/${key}`).once('value')
            setInitialData(store.val())
            setLoading(false)
        },
        [database,user]
      )

    useEffect(() => {
        if(showUpdateStoreModal) {
            fetchStoreData(storeSelectedId)
        }
    }, [storeSelectedId,showUpdateStoreModal,fetchStoreData])

    return (
      <StoreModal show={showUpdateStoreModal} handleClose={toggleUpdateStoreModal}>
          {
              loading 
                ? <TimeoutSpinner setLoading={setLoading} animation="grow" timeout={10000} />
                : <CreateUpdateStoreForm
                        initialData={initialData}
                        action={handleUpdate} 
                        title={t('store:Store')} 
                        handleClose={toggleUpdateStoreModal} 
                        validateBtnText={t("store:form.Update")} 
                    />
          }
      
      </StoreModal>
    )

}

export default composeHoc(withAuth,withDatabaseService,WithStore)(UpdateStoreModal)
