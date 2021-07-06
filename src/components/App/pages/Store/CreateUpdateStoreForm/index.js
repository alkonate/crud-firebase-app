import { useCallback, useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { getError } from "../../../../../helpers"
const initialState = {
    name : "",
    address:"",
    telephone: "",
    description: "",
  }

const CreateUpdateStoreForm = ({action,initialData,title,handleClose,validateBtnText}) => {
    
    const [data, setData] = useState({...initialState,...initialData})
    const { t } = useTranslation ()

    const formHandler = useCallback(    
    (e) => {
        setData( data => {
          return {
            ...data,
            [e.target.name] : e.target.value
          }
        })
      },
      []
    )

const submit = useCallback(
    async (e) => {
      e.preventDefault()
      try{
        await action(data)
      }catch(e){
        getError(e)

      }finally{
        //clear and close the modal
        setData({
            name : "",
            address : "",
            telephone : "",
            description : "",
          })
          handleClose()
      }
    },
    [data,action,handleClose]  
  )
    return (
        
        <Form onSubmit={submit}>
                    
                    <h4 className="modaltitle" >{title}</h4>
                    
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>{t("store:form.Name")}</Form.Label>
                        <Form.Control type="text" name="name" value={data.name} onChange={formHandler} autoComplete="store"  placeholder={t("store:form.eg AdamShop")} />
                        <Form.Text className="text-muted">
                            {t("store:form.Enter the name of your store")}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>{t("store:form.Address")}</Form.Label>
                        <Form.Control type="text" name="address" value={data.address} onChange={formHandler} autoComplete="address"  placeholder={t("store:form.eg Thies Ville")} />
                        <Form.Text className="text-muted">
                            {t("store:form.Enter the address of your store")}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Label>{t("store:form.Telephone")}</Form.Label>
                        <Form.Control type="text" name="telephone" value={data.telephone} onChange={formHandler} autoComplete="telephone"  placeholder={t("store:form.eg 77 000 00 00")} />
                        <Form.Text className="text-muted">
                            {t("store:form.Enter the telephone of your store")}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{t("store:form.Description")}</Form.Label>
                        <Form.Control as="textarea" rows={3} name="description" autoComplete="description" value={data.description} onChange={formHandler}  placeholder={t("store:form.eg We are selling books all around the world")} />
                        <Form.Text className="text-muted">
                            {t("store:form.Enter a description for your store")}
                        </Form.Text>
                    </Form.Group>       
                
                
                    <Button variant="secondary" className="m-2" onClick={handleClose}>
                    {t("store:form.Close")}
                    </Button>
                    <Button variant="primary" type="submit" disabled={!data.name || !data.address || !data.telephone || !data.description}>
                        {validateBtnText}
                    </Button>
            </Form>
        )
}

export default CreateUpdateStoreForm