import { useCallback } from "react"
import { Form, Button } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { getError } from "../../../../../helpers"


const DeleteStoreForm = ({action,handleClose}) => {
    
    const { t } = useTranslation ()

const submit = useCallback(
    async (e) => {
      e.preventDefault()
      try{
        await action()
      }catch(e){
        getError(e)
      }finally{
        handleClose()
      }
    },
    [action,handleClose]  
  )
    return (
        
        <div className="row justify-centent-center">  
            <h4 className="modaltitle" >{t("store:Delete store")}</h4>      
            <p className="text-muted" >{t("store:form.Delete warning message")}</p>
            <Form onSubmit={submit}>      
                    <Button variant="secondary" className="m-2" onClick={handleClose}>
                        {t("store:form.Close")}
                    </Button>
                    <Button variant="danger" type="submit">
                        {t("store:form.Delete")}
                    </Button>
            </Form>
        </div>
        )
}

export default DeleteStoreForm