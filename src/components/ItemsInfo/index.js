import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp, faArrowAltCircleDown, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import styles from './itemsInfo.module.css'
const ItemsInfo = (props) => { 

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col col-md-3">
                    <ItemInfo title="Products" className="text-primary" icon={faArrowAltCircleDown} count="100" incon="test" />
                </div>
                <div className="col col-md-3">
                    <ItemInfo title="Stocks" className="text-secondary" icon={faShoppingBasket} count="10" incon="test" />
                </div>
                <div className="col col-md-3">
                    <ItemInfo title="Sold" className="text-success" icon={faArrowAltCircleUp} count="90" incon="test" />
                </div>
            </div>      
        </div>
    )
}

const ItemInfo = ({title="Product",className,icon, count="200"}) => {
    return (
        <div  className={`${styles.iteminfo} bg-light border rounded text-center ${className}`}>
             <div className={`${styles.iteminfocount}`}>{count}</div>
            <div className={`${styles.iteminfotitle}`}><FontAwesomeIcon icon={icon}/> {title}</div>
        </div>
    )
}

export default ItemsInfo