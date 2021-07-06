import StoreContext from "../StoreContext"

const WithStore = Component => props => {
    return (
        <StoreContext.Consumer>
            {
                (storeContext) => <Component {...storeContext} {...props} />
            }
        </StoreContext.Consumer>
    )
}

export default WithStore