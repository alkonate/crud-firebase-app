import { Children, cloneElement, isValidElement, useState } from "react"

const Dismissable = ({children,duration}) => {
    const [dismiss, setDismiss] = useState(false)

    const setDismissDelay = () => {
        setDismiss(true)
    }

    const childrenWithProps = Children.map(children, child => {
        if(isValidElement) {
            return cloneElement(child,{dismiss : setDismissDelay, duration : duration})
        }
        return child
    })
    return dismiss ? null : childrenWithProps
}

export default Dismissable