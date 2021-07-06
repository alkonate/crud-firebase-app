import {composeHoc } from './../../../../../helpers'
import { withAuth } from "../../../../Authentication";
import WithStore from "../StoreConsumer";
import withDatabaseService from "./../../../../Database/WithDatabaseService";
import { useCallback } from "react";
import StoreModal from "../StoreModal";
import CreateUpdateStoreForm from "../CreateUpdateStoreForm";
import { useTranslation } from "react-i18next";


const NewStoreModal = ({database,user,createStore}) => {
    const { showNewStoreModal, toggleNewStoreModal } = createStore
    const { t } = useTranslation ()
    const handleAdd = useCallback(
      async (data) => {
         database.pushNode(`stores/${user.uid}`,data)
      },
      [database,user]
    )

    return (
      <StoreModal show={showNewStoreModal} handleClose={toggleNewStoreModal}>
        
        <CreateUpdateStoreForm 
          action={handleAdd} 
          title={t('store:Create store')} 
          handleClose={toggleNewStoreModal} 
          validateBtnText={t("store:form.New Store")} 
        />
      
      </StoreModal>
    )

}

export default composeHoc(withAuth,withDatabaseService,WithStore)(NewStoreModal)
