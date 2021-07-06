import { faStore, faPlus } from "@fortawesome/free-solid-svg-icons"
import SideBarItem from "./SidebarItem"
import styles from './style.module.css'
const menu = [
    {
        title : "sidebar:Store.Store",
        icon : faStore,
        dropdown : [
            {
                title : "sidebar:Store.Stores",
                to : {name : "Store"}
            },
        ]
    },
    {
        title : "sidebar:Provider.Provider",
        icon : faStore,
        dropdown : [
            {
                title : "sidebar:Provider.New provider",
                icon : faPlus,
                to : {name : "Home"},
            }
        ]
    },
]


const SideBar = () => {
    return (
       <>
            <div className={styles.sidebar}>
                {
                    menu.map((props,index) => 
                            <SideBarItem key={index} {...props} />)
                }
            </div>
       </>
    )
}

export default SideBar