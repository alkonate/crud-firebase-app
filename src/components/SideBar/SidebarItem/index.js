import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretRight, faCaretDown ,faDotCircle } from "@fortawesome/free-solid-svg-icons"
import { useCallback, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import StyledLink from "../../App/Navigation/StyledLink"
import { withRouter } from "react-router"
import styles from './style.module.css'

const SideBarItem = ({history,title,icon,dropdown}) => {
    const sideBarLinks = useRef()
    const sideBarTitle = useRef()
    const { t } = useTranslation()
    const [isOpen, setisOpen] = useState(false)

    const toggleItem = useCallback(
        (e) => {
            if(!dropdown) return;
            sideBarTitle.current.classList.toggle(styles.active)
            sideBarLinks.current.classList.toggle(styles.show)
            setisOpen(isOpen => !isOpen)
        },
        [dropdown],
    )

    return (
        <div className={styles.sidebaritem}>
            <div className={styles.sidebarTitle} onClick={toggleItem}>
                <div className={styles.title} ref={sideBarTitle} >
                    <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
                    &nbsp; 
                    <span className={styles.titleText}>{t(title)} 
                        &nbsp;
                        {
                            dropdown
                                ?  <FontAwesomeIcon icon={ isOpen ? faCaretDown : faCaretRight }></FontAwesomeIcon>
                                : null
                        }
                    </span>
                </div>
                <hr/>
            </div>
        
            <div className={styles.sidebarlinks} ref={sideBarLinks}>
                {
                    dropdown ? dropdown.map( ({title,to,command,icon},index) =>  
                            
                            <StyledLink to={to} command={(e)=>command(e,history)} key={index} >
                                    <div >
                                        <FontAwesomeIcon icon={icon ? icon : faDotCircle }></FontAwesomeIcon> <span className={styles.titleText}>{t(title)}</span>
                                    </div>
                                </StyledLink>

                                        )
                            : null 
                    
                }
            </div>
        </div>
    )
}

export default withRouter(SideBarItem)