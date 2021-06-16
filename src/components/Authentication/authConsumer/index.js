import AuthContext from "../AuthContext";

const withAuth = Component => props => (
    <AuthContext.Consumer>
        {
            ({dispatch,authState}) => <Component dispatch={dispatch} {...authState} {...props}></Component>
        }
    </AuthContext.Consumer>
)

export default withAuth