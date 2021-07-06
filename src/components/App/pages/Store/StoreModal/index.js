import Modal from 'react-modal'
Modal.setAppElement("#root")


const modalStyles = {
  content :  {
    position: "absolute",
    left: "50%",
    top: "20%",
    bottom: "0",
    transform: "translate(-50%, -20%)",
  }
}
const StoreModal = ({show,handleClose,children,style}) => 
            
                    <Modal style={style ? style : modalStyles} isOpen={show} onRequestClose={handleClose}>
                            {children}
                    </Modal>

export default StoreModal



