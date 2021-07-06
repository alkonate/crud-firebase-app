import {composeHoc } from './../../../../../helpers'
import { withAuth } from "../../../../Authentication";
import WithStore from "../StoreConsumer";
import withDatabaseService from "./../../../../Database/WithDatabaseService";
import { useCallback } from "react";
import StoreModal from "../StoreModal";
import DeleteStoreForm from '../DeleteStoreForm';

const modalStyles = {
    content :  {
      position: "absolute",
      left: "50%",
      top: "50%",
      bottom: "0",
      transform: "translate(-50%, -50%)",
      width: "40%",
      height: "30%"
    }
  }

const DeleteStoreModal = ({database,user,deleteStore,storeSelectedId}) => {
    const {  showDeleteStoreModal, toggleDeleteStoreModal } = deleteStore
    const handleDelete = useCallback(
      async () => {
         database.removeNode(database.getNodeRef(`stores/${user.uid}/${storeSelectedId}`))
      },
      [database,user,storeSelectedId]
    )

    return (
      <StoreModal style={modalStyles} show={showDeleteStoreModal} handleClose={toggleDeleteStoreModal}>
        
        <DeleteStoreForm 
          action={handleDelete} 
          handleClose={toggleDeleteStoreModal} 
        />
      
      </StoreModal>
    )

}

export default composeHoc(withAuth,withDatabaseService,WithStore)(DeleteStoreModal)
